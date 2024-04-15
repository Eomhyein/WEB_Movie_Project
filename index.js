function openclose() {
  $('#postingbox').toggle();
}


function makeCard() {
  let image = $('#image').val();
  let title = $('#title').val();
  let comment = $('#comment').val();
  let star = $('#star').val();

  let temp_html = `
  <div class="col">
    <div class="card h-100">
      <img src="${image}"
        class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${star}</p>
        <p class="card-text">${comment}</p>
      </div>
    </div>
  </div>`;

  $('#card').append(temp_html);
}