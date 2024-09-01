# NDS-news-score-React 

## Tools
<p align="left">
  <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" 
  alt="FastApi">
  <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" 
  alt="Python">
  <img src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue" 
  alt="ML">
  </p>
  <img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img src="https://img.shields.io/badge/logo-javascript-blue?logo=javascript"/>


# Objective
* Using data [News Dataset BBC](https://www.kaggle.com/datasets/gpreda/bbc-news) from 2013 to 2024. 
* Comparing (similiarity) two NDS  with metrics.
* Find higher scoring queries that are most similar to news headlines.
* Basic project [from NDS-Metrics score](https://github.com/ackermanjayjay/NDS_Metrics-Score-)
* Make A frontend view with Reactjs (Frontend still production)

# Scope
* Techique embedding data  with TFIDF and Counvectorizer( Bag of word )
* Find query beetween NDS to find higher similiarity

# How to use
<pre>
pip venv "you name venv"
pip install requirements.txt
</pre>

```
http://127.0.0.1:8000/search/text?q=harry kane
```
```
{
  "result": "success",
  "data": {
    "query": "harry kane",
    "news_description": [
      "England captain Harry Kane scores his first goal of the 2022 World Cup to double their lead against Senegal in the last 16.",
      "Pictures of captain Harry Kane cover the front pages after England's World Cup loss to France.",
      "Pictures of captain Harry Kane cover the front pages after England's World Cup loss to France.",
      "England captain Harry Kane says he wants to \"shine a light\" on issues around Qatar, where the 2022 World Cup will be held.",
      "England captain Harry Kane says former internationals who are now pundits should \"remember what it’s like to wear the shirt\".",
      "Harry Kane took responsibility for England's World Cup exit after missing a crucial penalty during their 2-1 defeat to France.",
      "England captain Harry Kane makes his Bayern Munich debut only hours after completing an £86m move from Tottenham.",
      "Harry Kane scores his 50th England goal with a late penalty to earn a Nations League draw with Germany in Munich.",
      "When Harry Kane was on the pitch, Bayern Munich were heading to the Champions League final at Wembley. When he wasn't there, it all went wrong.",
      "Harry Kane just can't stop scoring - now all he needs is a first career major trophy. Could the Champions League deliver?"
    ],
    "score": [
      0.45452769298532325,
      0.43979870634039064,
      0.43979870634039064,
      0.41884878804902526,
      0.4156781694182735,
      0.410701578776289,
      0.4099356288709586,
      0.4088763474113698,
      0.4064852120055431,
      0.4047302830668567
    ]
  }
}
```





