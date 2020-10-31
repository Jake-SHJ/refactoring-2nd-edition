// 사진 관련 데이터를 HTML로 출력
function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(p) {
  return ["<div>", `<p>제목: ${p.title}</p>`, emitPhotoData(p), "</div>"].join(
    "\n"
  );
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>날짜: ${aPhoto.data.toDateString()}</p>`);
  return result.join("\n");
}

// 제목을 출력하는 코드를 emitPhotoData로 옮겨 중복 제거

/**
 * 호출자 중 하나에 함수 추출하기 적용
 */

function photoDiv(p) {
  return ["<div>", zznew(p), "</div>"].join("\n");
}

function zznew(p) {
  return [`<p>제목: ${p.title}</p>`, emitPhotoData(p)].join("\n");
}

/**
 * 다른 호출자들도 수정
 */

function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(zznew(person.photo));
  return result.join("\n");
}

/**
 * emitPhotoData() 함수 인라인하기
 */

function zznew(p) {
  return [
    `<p>제목: ${p.title}</p>`,
    `<p>위치: ${p.location}</p>`,
    `<p>날짜: ${p.data.toDateString()}</p>`,
  ].join("\n");
}

/**
 * 함수 이름을 바꿔 마무리
 */

function renderPerson(outStream, person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
}

function photoDiv(aPhoto) {
  return ["<div>", emitPhotoData(aPhoto), "</div>"].join("\n");
}

function emitPhotoData(aPhoto) {
  return [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.data.toDateString()}</p>`,
  ].join("\n");
}
