from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

translate_tokenizer = None
translate_model = None


def initialize_translator():
    global translate_tokenizer, translate_model
    translate_model_name = "VietAI/envit5-translation"
    translate_tokenizer = AutoTokenizer.from_pretrained(translate_model_name)
    translate_model = AutoModelForSeq2SeqLM.from_pretrained(translate_model_name)
    translate_model.to('cuda')


def translate_text(sentence):
    if translate_model is None or translate_tokenizer is None:
        initialize_translator()
    output = translate_model.generate(
        translate_tokenizer(sentence, return_tensors="pt", padding=True).input_ids.to('cuda'), max_length=512)
    sentence = translate_tokenizer.batch_decode(output, skip_special_tokens=True)
    en_sentence = sentence[0].split("en: ")[1]
    return en_sentence
