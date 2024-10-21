{% assign current = include.current %} 

<div style="color:black; border-style: solid; padding: 10px; margin-bottom: 15px; background-color: #add8e6;">

{% if current==true %}

Tehtävistä päivitetty 1, muut päivittämättä. Muut todella pahasti vaiheessa.

{% else %}

Tehtäviä ei ole päivitetty. Tekeminen omalla vastuulla!

{% endif %}

</div>