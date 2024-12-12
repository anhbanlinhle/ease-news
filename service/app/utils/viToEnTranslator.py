from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

translate_tokenizer = None
translate_model = None


def initialize_translator():
    global translate_tokenizer, translate_model
    translate_model_name = "VietAI/envit5-translation"
    translate_tokenizer = AutoTokenizer.from_pretrained(translate_model_name)
    translate_model = AutoModelForSeq2SeqLM.from_pretrained(translate_model_name)
    translate_model.to('cpu')


def translate_text(sentence):
    if translate_model is None or translate_tokenizer is None:
        initialize_translator()
    sentence = "vi: " + sentence
    token = translate_tokenizer([sentence], return_tensors="pt", padding=True).input_ids.to('cpu')
    output = translate_model.generate(token, max_length=512)
    sentence = translate_tokenizer.batch_decode(output, skip_special_tokens=True)
    try:
        en_sentence = sentence[0].replace("en: ", "")
    except Exception as e:
        en_sentence = sentence[0]
    return en_sentence
