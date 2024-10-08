{% assign part = include.part %} 

*Allaolevien tehtävien deadline on {{site.lask-dl[part]}}*

{% include paja.md %}

{% if part==2 %}

Muista myös monivalintatehtävät joiden deadline on  {{site.moniv-dl[part]}} 
- luentoja 1 ja 2 käsittelevät [viikon 1]({{site.stats_url}}/quiz/1}) tehtävät
- luentoja 3 ja 4 käsittelevät [viikon 2]({{site.stats_url}}/quiz/2}) tehtävät

{% elsif part!=1 %}

Muista myös tämän viikon [monivalintatehtävät]({{site.stats_url}}/quiz/{{part}}), joiden deadline on {{site.moniv-dl[part]}} .

{% else %}

Tällä viikolla ei monivalintatehtävien deadlinea!

{% endif %}