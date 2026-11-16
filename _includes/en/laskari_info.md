{% comment %}source: _includes/laskari_info.md source_commit: 85a3af3{% endcomment %}
{% assign part = include.part %} 

*The deadline for the exercises below is {{site.lask-dl-en[part]}}*

{% include en/paja.md %}

{% if part == 6 %}
The topics of the week 6 lecture belong to the week 5 [multiple choice quizzes]({{site.stats_url}}/quiz/5), whose deadline is {{site.moniv-dl-en[5]}}.
{% elsif part == 5 %}
Also remember the [multiple choice quizzes]({{site.stats_url}}/quiz/5) that review the lectures of weeks 5 and 6. Their deadline is {{site.moniv-dl-en[5]}}.
{% else %}
Also remember this week's [multiple choice quizzes]({{site.stats_url}}/quiz/{{part}}), whose deadline is {{site.moniv-dl-en[part]}}.
{% endif %}
