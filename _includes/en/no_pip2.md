{% comment %}source: _includes/no_pip2.md source_commit: 85a3af3{% endcomment %}
<div style="color:black; border-style: solid; border-width: thick; border-color: red; padding: 10px; margin-bottom: 15px; padding: 10px; background-color: #F1EFEF;">

<h4>Warning: pip</h4>

<p>
You may have installed Python dependencies with the pip command. Do not use pip on this course: if you do, you are 99.9% likely to do something wrong.
</p>

<p>On this course, dependencies are installed with <a href="/en/uv">uv</a>.</p>

<p>In practice, this means that you install dependencies with the command <tt>uv add kirjasto</tt> instead of <tt>pip install kirjasto</tt>.</p>

</div>
