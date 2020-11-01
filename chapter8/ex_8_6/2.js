function condition() {
  // 변수 중복을 막기 위해 임시로 함수 처리를 했다. 실제 예시에는 함수로 감싸져 있지 않다
  let result;
  if (availableResources.length === 0) {
    result = createResource();
    allocatedResources.push(result);
  } else {
    result = availableResources.pop();
    allocatedResources.push(result);
  }
  return result;
}

/**
 * 중복된 문장 슬라이드
 */
function condition() {
  let result;
  if (availableResources.length === 0) {
    result = createResource();
  } else {
    result = availableResources.pop();
  }
  allocatedResources.push(result);
  return result;
}
