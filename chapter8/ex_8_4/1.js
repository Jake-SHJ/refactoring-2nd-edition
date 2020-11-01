// 호출자가 둘뿐인 단순한 상황
function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDataCutoff())
    .forEach((p) => {
      outStream.write(`<div>\n`);
      emitPhotoData(outStream, p);
      outStream.write(`</div>\n`);
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

// renderPerson은 그대로 둔 채 listRecentPhotos()가 위치 정보를 다르게 렌더링하도록 수정

/**
 * emitPhotoData()에 남길 코드를 함수로 추출
 */
function emitPhotoData(outStream, photo) {
  zztmp(outStream, photo);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

function zztmp(outStream, photo) {
  // 이동하지 않을 코드
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}

/**
 * 피호출 함수를 호출자들로 한 번에 하나씩 인라인
 */
function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  zztmp(outStream, person.photo);
  outStream.write(`<p>위치: ${photo.location}</p>\n`); // 첫번째 호출 위치 인라인
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDataCutoff())
    .forEach((p) => {
      outStream.write(`<div>\n`);
      zztmp(outStream, p);
      outStream.write(`<p>위치: ${p.location}</p>\n`); // 두번째 호출 위치 인라인
      outStream.write(`</div>\n`);
    });
}

function emitPhotoData(outStream, photo) {
  zztmp(outStream, photo);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

function zztmp(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}

/**
 * 원래 함수를 지워 함수 인라인하기 마무리
 */
function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  zztmp(outStream, person.photo);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDataCutoff())
    .forEach((p) => {
      outStream.write(`<div>\n`);
      zztmp(outStream, p);
      outStream.write(`<p>위치: ${p.location}</p>\n`);
      outStream.write(`</div>\n`);
    });
}

function zztmp(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}

/**
 * zztmp()의 이름을 원래 함수의 이름으로 되돌리기
 */
function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDataCutoff())
    .forEach((p) => {
      outStream.write(`<div>\n`);
      emitPhotoData(outStream, p);
      outStream.write(`<p>위치: ${p.location}</p>\n`);
      outStream.write(`</div>\n`);
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>\n`);
}
