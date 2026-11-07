{% assign part = include.part %} 

*Allaolevien tehtävien deadline on {{site.lask-dl[part]}}*

{% include paja.md %}

{% if part == 6 %}
Viikon 6 luennon asiat kuuluvat viikon 5 [monivalintatehtäviin]({{site.stats_url}}/quiz/5), joiden deadline on {{site.moniv-dl[5]}}.
{% elsif part == 5 %}
Muista myös viikkojen 5 ja 6 luentoja kertaavat [monivalintatehtävät]({{site.stats_url}}/quiz/5), joiden deadline on {{site.moniv-dl[5]}}.
{% else %}
Muista myös tämän viikon [monivalintatehtävät]({{site.stats_url}}/quiz/{{part}}), joiden deadline on {{site.moniv-dl[part]}}.
{% endif %}
