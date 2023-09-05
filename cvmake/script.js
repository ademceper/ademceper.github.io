document.getElementById('add').addEventListener('click', function() {
    document.getElementById('form').style.display = 'block';
});
document.getElementById('close').addEventListener('click', function() {
    document.getElementById('form').style.display = 'none';
});
document.getElementById('add-experience').addEventListener('click', function() {
    var html = '<div class="form-group"><input type="text" name="work" placeholder="Firma"></div><div class="form-group"><input type="text" name="work" placeholder="Position"></div><div class="form-group"><input type="text" name="work" placeholder="Duration"></div><div class="form-group"><textarea name="work-description" rows="3" placeholder="Job Description"></textarea></div><br><hr><br>';

    var Element = document.getElementById('Experience');

    Element.innerHTML += html;
});
document.getElementById('add-skill').addEventListener('click', function() {
    var html = '<div class="form-group"><input type="text" name="skill" placeholder="Skill"></div>';

    var Element = document.getElementById('Skill');

    Element.innerHTML += html;
});
document.getElementById('add-education').addEventListener('click', function() {
    var html = '<div class="form-group"><input type="text" name="education" placeholder="Bölüm"></div><div class="form-group"><input type="text" name="education" placeholder="Üniversite"></div><div class="form-group"><input type="text" name="education" placeholder="Yıllar"></div><br><hr><br>';

    var Element = document.getElementById('Education');

    Element.innerHTML += html;
});

