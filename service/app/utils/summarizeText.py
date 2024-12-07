import os
import torch
from transformers import T5ForConditionalGeneration, T5Tokenizer

os.environ["CUDA_VISIBLE_DEVICES"] = "0"
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

model = None
tokenizer = None
device = None


def initialize_device(device_name):
    global device
    device = device_name


def initialize_model():
    global model, tokenizer
    if model is None or tokenizer is None:
        print("Loading model...")
        tokenizer = AutoTokenizer.from_pretrained("ntkhoi/mt5-vi-news-summarization")
        model = AutoModelForSeq2SeqLM.from_pretrained("ntkhoi/mt5-vi-news-summarization")
        model.to(device)


async def summarize_text(src):
    if model is None or tokenizer is None:
        initialize_model()

    tokenized_text = tokenizer.encode(src, return_tensors="pt").to(device)
    model.eval()
    with torch.no_grad():
        summary_ids = model.generate(
            tokenized_text,
            max_length=256,
            num_beams=3,
            repetition_penalty=2.5,
            length_penalty=1.0,
            early_stopping=True
        )
    try:
        output = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    except Exception as e:
        output = src
    return output
