---
tags:
  - CO3722
  - Data-Science
---
[[CO3722 Data Science]]
[[CO3722 Assignment 1 - Brief Notes]]

---
# Feedback

>[!success] 74 / 100 Marks
>```
>Research and question design:  
You have demonstrated deep domain knowledge with a critical evaluation of dataset features. 
>
>While you described the distributions visually, you did not calculate key statistical measures (mean, standard deviation) in the text to quantify this spread.  
  >
>Research questions have been formulated well.
>
>Good choice of algorithms. But the discussion is very brief and lacks critical contrast between the algorithms. 
>
>Ethical analysis:  
>Good identification of specific risks. This can be expanded with the inclusion of algorithmic and AI-related risk, along with proper references.
>
>Introduction and recommendation:  
>Strong business context, but the introduction lacks references to support your initial claims about the industry. The conclusion is very brief. You needed to propose specific next steps for questioning the data
>```

---
The **Research Report** assignment will be in 4 sections:
# 1. Introduction (~10%)
Data-driven decision-making  has become a fundamental component within many modern business operations enabling organisations to extract insights from the quantitative data collected to identify patterns, predict outcomes and inform strategy decisions against competitors. Analytics has become imperative as a competitive advantage across almost every industry sector, from customer behaviour such as buying habits, to customer demand forecasting to predict and project potential risky business choices, while maintaining optimisation and efficiency through the business practices.

The entertainment and streaming industry represent a particularly fascinating domain for data science, where platforms such as Netflix, Amazon Prime, and Disney+ utilise it to potentially forecast statistics such as subscriber retention. In highly competitive environments, like streaming services, data-driven practices have developed from general business insights into a core strategy for business survival. This report focuses on a publicly available Kaggle dataset (Bansal, S. (2021)) focusing on the Netflix containing a cumulative total of 8,807 movies and tv show titles, the data is spread across these titles described by twelve attributes being: content type, director, country, release year, rating, duration, movie genre, and description.

---
# 2. Critical Discussion of the Proposed Dataset & Question Development (~40%)
## 2.1. Data Collection & Feature Selection
The chosen Netflix dataset represents a static and simple curation of a sample of the total catalogue’s metadata, as of mid-2021. For a streaming service this data is typically sourced from internal management systems, which aggregate information from customer behaviour, trending analytics and categorised popularity by geographic location such as with their current country’s top trending recommendation system. The value of this dataset is for a competitive advantage insight, allowing not just individuals to assess the Netflix dataset but other companies who may find their historical data relevant for business or delayed content release strategies.

The twelve attributes provide the information required to critically evaluate the dataset’s utility for data science. The show type attribute being either movie or tv show is fundamental for analysing past consumer content trends if mixed with an additional dataset providing user-engagement or review data for the same or similar catalogue sample. Time features like the release year and date added allow for analysis of the catalogue growth over time, which can indicate trends or business growth strategies such as the exponential increase in content for Netflix from 2016 onwards, as detailed in an article by Moses, 2024 which states that Netflix wrote the playbook for streaming and entertainment services. Attributes like the country, rating and genre are essential for understanding geographically trending movies or shows, or the audience segmentation between regional content. However, features like the director and cast provide challenges due to 30% of the directors and 9% of the cast being missing values.
## 2.2. Data Cleaning Strategy
The analysis scope for this project focuses on high-level data like trends, genre distribution, and geographical content. The director and cast attributes are not essential for the evaluation which is centred on the other remaining ten attributes which provide direct and clear insights. Therefore, to acknowledge the presence of the missing data in these categories, the decision was made to remove these two attributes from the overall analysis. Removing this data simplifies the cleaning process required and aligns the dataset more tightly with the purpose of the research.

The analysis scope for this project focuses on high-level data like trends, genre distribution, and geographical content. The director and cast attributes are not essential for the evaluation which is centred on the other remaining ten attributes which provide direct and clear insights. Therefore to acknowledge the presence of the missing data in these categories, the decision was made to remove these two attributes from the overall analysis. Removing this data simplifies the cleaning process required and aligns the dataset more tightly with the purpose of the research.

For the retained features, a targeted cleaning strategy is required. The country attribute, often containing multiple listed countries for a single title, presents a standardisation challenge. To resolve this for the purposes of analysing the content and geographical regional trends based on primary production country. This transforms the data from a complex multi-entry field into a clear single categorical feature suitable for analysis and visualisation for comparison of content from across multiple regions. While this approach does not capture a title’s full international distribution it successfully creates a clean dataset for analysing the core geographic origins of content within the catalogue.

The duration attribute presents a unique data cleaning challenge as its format entirely depends on the field’s content, as it stores the movies runtime, and the number of seasons for a tv show. To make this analytically useful, this single column will be separated into two distinct features being movie duration minutes, and tv show seasons. This separation allows for a proper statistical analysis of each content’s format length.

Furthermore, to address the absence of an explicit identifier for distinguishing original from licensed content. By comparing the release_year to the year extracted from date_added, it is possible to infer that the content’s acquisition to Netflix’s platform can be correlated with the specific title’s release year. It can be classified as an Original or First-Run under the assumption that Netflix releases its own productions immediately. Conversely a delineation between these dates can suggest a Licensed title reflecting the typical delay caused by Cinema-wide releases or prior broadcasting rights held by other networks.

Finally, the date added attribute must be converted into a standard date and time format to ensure consistent analyse of catalogue growth. These steps collectively format the data into a consistent clean dataset ready for analysis.
## 2.3. Research Questions
### 2.3.1. How has Netflix’s volume of content (as assumed by the dataset) increased from 2008 to 2021?
![[CO3722_A1_Line_Graph.png]]
This graph illustrates content graph from 2008 to 2021 the temporal shift in the growth of the Netflix catalogue, providing a clear visualisation for Netflix’s over thirteen-year expansion. The data demonstrates content additions during the years of 2008 and 2015 were minimal with fewer than 50 titles being added annually during this period. However, from 2016 onwards the graph demonstrates the dramatic acceleration peaking to around 2000 titles added in 2019. This shift reflects Netflix’s evolving business strategy transiting from a heavy reliance on third-party licensing toward large-scale investment in exclusive original content Lobato, R. (2019). The reason for this change could be due to the rise of competitive streaming platforms such as Amazon Prime, therefore making the original content the key differentiator between the platforms.
### 2.3.2. What are the dominant genres within the dataset and how is this correlated to the number of titles available?
![[C3722_A1_Bar_Chart.png]]
The bar chart graph above shows the top 10 dominant genres in the Netflix dataset, which highlights a large disparity in content genres. International Movies represent a clear outlier peaking around 2,750 titles, followed by Dramas at around 2,400 titles, while Comedies trail behind significantly with roughly 1,600 titles.

This data demonstrates that the platform prioritises global content over local content, this trend correlates with Netflix’s “localised content strategy” as noted by Patov (2024), that Netflix’s heavily invests in regional productions such as Money Heist in Spain to drive subscriber growth in more diverse international markets. Furthermore, the separation of genres as seen in the group particularly the disparity between Dramas and TV Dramas reflects the usage of varied content formats to inform recommendation algorithms responsible for 80% of content discovery.
### 2.3.4. What is the frequency distribution of content duration for Movies compared to TV Shows?
![[CO3722_A1_Histograms.png]]
The histograms above illustrate the distribution of duration for Movies and TV shows revealing distinct structural patterns in the platform’s catalogue as provided by the dataset. The data for movies approximates a normal distribution peaking significantly around 90-to-100-minute mark. This aligns with traditional industry standards for feature-length movies, historically leaning towards optimisation for Cinemas to produce high turnover and audience retention.

In contrast, the distribution for TV shows reflects a strong right-skewed pattern rather than a regular bell curve. The data indicates that most series—approximately 67% of the category—consist of only one season, whereas second seasons account for just 17% of TV shows (or 5% of the complete dataset). This right-skewed structure suggests that the Netflix catalogue is heavily weighted towards limited series or shows that were cancelled, with multi-season content being a comparative rarity.
### 2.3.4. How does the distribution of season counts reflect Netflix’s strategic shift towards binge-consumption?
![[CO3722_A1_Double_Line_Graph.png]]
The line graph above visualises the annual release for TV shows segmented by content type, which reveals distinct differences between Netflix’s internal production strategy and its acquisition of licensing agreements. The data for the originals approximates a solid growth curve rising sharply from 2015, reflecting a drive to produce more exclusive content to stimulate subscriber growth. This trajectory aligns with Netflix’s strategic shift from third-party licensing to new and original content that does not rely on third-party studios.

In contrast, the licensing line of the graph approximates a linear trend which remained steadily rising until 2016 before experiencing a distinct downturn in 2018. This inflection point reflects the industry-wide “repatriation” of content, where studios such as Disney and Fox began withdrawing their intellectual property to launch competing services, as described by Munson (2018). Consequently, the continued descent observed post-2018 indicates that Netflix’s reliance on licensed material has diminished, with the platform increasingly focusing on original content to offset the gap left by the withdrawn titles.

---
# 3. Critical Evaluation of Data Modelling including its Ethical Considerations
Based on the exploratory analysis in the 2.3.4. section which identified a high rate for single season shows. A predictive model could be deployed to optimise production investment, the primary purpose of which is to identify whether a new original series will secure a renewal for a second season or be cancelled. To address this, a binary classification model is proposed to estimate the probability of a new series securing a renewal. The target variable for this model would be defined based on the duration value where a value of 1 season is classified as 0 which indicates Risk or Cancelled and 2+ Seasons which is classified as renewed and successful.

To implement this, two algorithms that would work best for evaluation. Logistic Regression is a strong candidate for its interpretability, allowing acquisition managers to quantity exactly how specific features such as Genre or Country increase or decrease the odds of renewal. However, given the complexity of the dataset a Random Forest Classifier is the better choice as this method is superior for handling the dataset’s categorical variables without extensive pre-processing (Breiman, 2001) and provides ranking for features of the dataset allowing for easy evaluation of which of the important features directly impact the state of the current competitive streaming environment.

Critically the adoption of this model raises significant ethical concerns regarding the automation of creative media decision making. While analyse of the dataset revealed that international movies are the largest genre, this broad categorisation presents the risk of oversimplification. By categorising cultural movies into one single international genre, a predictive model may fail to distinguish between specific regional markets. Consequently, this could lead to a scenario where the algorithm favours content based on the historical patterns for specific international regions, therefore, the model must be deployed strictly as a decision-support tool and not as an autonomous decision-maker.

---
# 4. Conclusions & Recommendations
This report has critically evaluated the Netflix dataset to determine its utility for driving business insight. The findings demonstrate that while the dataset provides strong signs regarding catalogue growth and the dominance of international genres, it requires careful feature engineering to address significant class imbalances, particularly the prevalence of single season shows. This imbalance is not merely due to statistics but reflects a documented business strategy as discussed by Lederer (2024), Netflix frequently cancels series that fail to meet a 50% completion rate threshold within their first four weeks, resulting in many unfinished narratives.

---
# 5. References
- Bansal, S. (2021) _Netflix movies and TV shows_. Kaggle. Available at: [https://www.kaggle.com/datasets/shivamb/netflix-shows](https://www.kaggle.com/datasets/shivamb/netflix-shows) (Accessed: 06 December 2025).
- Breiman, L. (2001) ‘Random Forests’, _Machine Learning_, 45(1), pp. 5–32. Available at: [https://link.springer.com/article/10.1023/A:1010933404324](https://link.springer.com/article/10.1023/A:1010933404324) (Accessed: 12 December 2025).
- Lobato, R. (2019) _Netflix nations: The Geography of Digital Distribution_. Open Square: NYU Press. Available at: [https://opensquare.nyupress.org/books/9781479882281](https://opensquare.nyupress.org/books/9781479882281) (Accessed: 10 December 2025).
- Moses, L. (2024) _How Netflix has changed the Global Entertainment Industry_. Business Insider. Available at: [https://www.businessinsider.com/how-netflix-is-changing-the-entertainment-industry-2021-8](https://www.businessinsider.com/how-netflix-is-changing-the-entertainment-industry-2021-8) (Accessed: 06 December 2025).
- Munson, B. (2018) _Deeper Dive—How Netflix is bracing for the coming licensed content exodus_. StreamTV Insider. Available at: [https://www.streamtvinsider.com/video/deeper-dive-how-netflix-bracing-for-coming-licensed-content-exodus](https://www.streamtvinsider.com/video/deeper-dive-how-netflix-bracing-for-coming-licensed-content-exodus) (Accessed: 11 December 2025).
- Patov, A. (2024) _How Netflix Uses Data to Drive Hyper-Personalized Customer Experience (CX)_. Renascence. Available at: [https://www.renascence.io/journal/how-netflix-uses-data-to-drive-hyper-personalized-customer-experience-cx](https://www.renascence.io/journal/how-netflix-uses-data-to-drive-hyper-personalized-customer-experience-cx) (Accessed: 10 December 2025).