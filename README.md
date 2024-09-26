# NDS-news-score-React 


## Project Overview
This project builds a News Recommendation System that focuses on recommending business-related news articles to users. The system leverages Natural Language Processing (NLP) techniques to analyze articles and user preferences for personalized recommendations.

## Key Objectives:
Content-based recommendations: Suggest articles similar to those the user has interacted with.
User-based recommendations: Suggest articles that are popular among users with similar profiles.

## Key Features
NLP-based Article Representation: Uses TF-IDF, Word2Vec, or BERT embeddings to represent article content.
Recommendation Algorithms: Includes both collaborative filtering and content-based filtering approaches.

## Model Overview
* The system uses a combination of content-based filtering and collaborative filtering:

* Content-Based Filtering: Represents articles using embeddings from TF-IDF, and calculates similarity using cosine similarity.

* Collaborative Filtering: Uses historical data of users and their interactions with articles to find similar users and recommend relevant articles.



## NLP Techniques Used:

* Text Cleaning: Removal of stop words, special characters, etc.

* Text Embedding:

  * TF-IDF: Simple term frequency-inverse document frequency model.

## System Architecture
The system architecture consists of the following components:

* Data Ingestion: Collects news data from Kagle
* Preprocessing: Cleans and tokenizes news articles. NLP techniques like lemmatization and stop-word removal are applied.
* Content Representation: Uses various embedding techniques to transform the articles into numerical representations.
Recommendation Engine:
* Content-based: Recommends articles based on article similarity using cosine similarity on vectorized text.
* Collaborative-based: Uses historical user interactions to recommend articles.






## Data Source:
* BBC: https://www.kaggle.com/datasets/gpreda/bbc-news

## Model Overview
The system uses a combination of content-based filtering and collaborative filtering:
* Content-Based Filtering: Represents articles using embeddings from TF-IDF, and calculates similarity using cosine similarity.
* Collaborative Filtering: Uses historical data of users and their interactions with articles to find similar users and recommend relevant articles.

## NLP Techniques Used:
* Text Cleaning: Removal of stop words, special characters, etc.
* Text Embedding:
  * TF-IDF: Simple term frequency-inverse document frequency model.

## Usage
<pre>
pip venv "you name venv"
pip install requirements.txt
</pre>

<pre>
fastapi dev server.py
</pre>

## API Endpoint

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
