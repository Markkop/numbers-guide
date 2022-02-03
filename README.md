# 🔮 Numbers' Guide


This Amazon Alexa Skill computes the numerology number for a date or a multiple digits number and retrives the meaning for it.  
It's only available in pt-BR.

# Get the Skill

![amazon store printscreen](https://user-images.githubusercontent.com/16388408/152383120-b92b08a7-725b-4996-97cd-ebe1553e3464.png)

https://www.amazon.com.br/Marcelo-Kopmann-Guia-dos-N%C3%BAmeros/dp/B08VWGQ7J3/

# Usage

```
"Alexa, abra Guida dos Números e pergunte qual o número de 16 de Maio de 1962"
"Alexa, pergunte Guida dos Números qual o número de hoje
"Alexa, abra Guia dos Números e fale o significado para o número 947"
```

# How to develop

```
ask configure
ask init --hosted-skill-id amzn1.ask.skill.316649f9-4d83-464f-a085-57620934aef1
cd lambda && npm install && cd ..
git remote add github git@github.com:Markkop/numbers-guide.git
```

Compiled folder "dist" have to be commited since this project is a Alexa-hosted skill (which is free) and therefore we have to build the javascript code before sending it to Amazon.

# References

- [Build Skills with the Alexa Skills Kit](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/build-skills-with-the-alexa-skills-kit.html)
- [Steps to Build a Custom Skill](https://developer.amazon.com/en-US/docs/alexa/custom-skills/steps-to-build-a-custom-skill.html)
- [Create a Custom Skill from a Quick Start Template](https://developer.amazon.com/en-US/docs/alexa/custom-skills/create-custom-skill-from-quick-start-template.html)
- [Get Started with the Alexa Skills Toolkit for Visual Studio Code](https://developer.amazon.com/en-US/docs/alexa/ask-toolkit/get-started-with-the-ask-toolkit-for-visual-studio-code.html)
