{% assign current = include.current %} 

<div style="color:black; border-style: solid; padding: 10px; margin-bottom: 15px; background-color: #add8e6;">

{% if current==true %}

Tehtäviä ei ole päivitetty. Suurta muutosta ei kuitenkaan ole odotettavissa joten voit jo aloittaa...

{% else %}

Tehtäviä ei ole päivitetty. Tekeminen omalla vastuulla!

{% endif %}

</div>