import os

import torch
from transformers import T5ForConditionalGeneration, T5Tokenizer

os.environ["CUDA_VISIBLE_DEVICES"] = "0"

print(torch.cuda.is_available())
print(torch.cuda.get_device_name(0) if torch.cuda.is_available() else "No GPU")

if torch.cuda.is_available():
    device = torch.device("cuda")

    print('There are %d GPU(s) available.' % torch.cuda.device_count())

    print('We will use the GPU:', torch.cuda.get_device_name(0))
else:
    print('No GPU available, using the CPU instead.')
    device = torch.device("cpu")

model = T5ForConditionalGeneration.from_pretrained("NlpHUST/t5-small-vi-summarization")
tokenizer = T5Tokenizer.from_pretrained("NlpHUST/t5-small-vi-summarization")
model.to(device)


async def summarize_text(src):
    tokenized_text = tokenizer.encode(src, return_tensors="pt").to(device)
    model.eval()
    with torch.no_grad():
        summary_ids = model.generate(
            tokenized_text,
            max_length=256,
            num_beams=5,
            repetition_penalty=2.5,
            length_penalty=1.0,
            early_stopping=True
        )
    try:
        output = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    except Exception as e:
        output = src
    return output
