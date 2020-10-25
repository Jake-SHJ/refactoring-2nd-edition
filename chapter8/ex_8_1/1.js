// GPS 추적 기록의 총 거리를 계산하는 함수

function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  // 총 거리 계산
  function calculateDistance() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {} // 두 지점의 거리 계산
  function radians(degrees) {} // 라디안 값으로 변환
  function calculateTime() {} // 총 시간 계산
}

// 중첩 함수인 calculateDistance()를 최상위로 옮겨서 추적 거리를 다른 정보와는 독립적으로 계산하고 싶음
/**
 * 함수를 최상위로 복사
 */
function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateDistance() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {}
  function radians(degrees) {}
  function calculateTime() {}
}

function top_calculateDistance() {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

/**
 * 정의되지 않은 심벌(distance, points)에 대한 처리
 */
// points는 매개변수 처리
function top_calculateDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

// distance() 함수도 똑같이 처리할 수 있지만 calculateDistance와 함께 옮기는 게 합리적으로 보인다
// distance()와 distance()가 의존하는 함수(radians)
function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateDistance() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {
    const EARTH_RADIUS = 3959; // mile
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.cos(radians(p2.lat)) *
        Math.cos(radians(p1.lat)) *
        Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
  }
  function radians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  function calculateTime() {}
}

// distance()는 radians()만 사용하며, radians()는 현재 컨텍스트에 있는 어떤 것도 사용하지 않는다
// 두 함수는 매개변수보다는 함께 옮겨버리는 게 낫다

/**
 * distance()와 radians()를 calculateDistance() 함수 안으로 옮기기
 */
function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateDistance() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
    function distance(p1, p2) {}
    function radians(degrees) {}
  }

  function calculateTime() {}
}

/**
 * 정적 검사 후 문제 없으면 top_calculateDistance()에도 복사
 */
function top_calculateDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
  function distance(p1, p2) {}
  function radians(degrees) {}
}

/**
 * calculateDistance()를 수정, top_calculateDistance()를 호출
 */
function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateDistance() {
    return top_calculateDistance(points);
  }

  function calculateTime() {}
}

/**
 * 테스트 후 문제가 없다면, 소스 함수 제거
 */
function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = top_calculateDistance(points);
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  function calculateTime() {}
}

/**
 * 함수 이름을 변경하고, 변수 인라인하기
 */

function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDistance(points);
  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace,
  };

  function calculateTime() {}
}

function totalDistance(points) {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
  function distance(p1, p2) {}
  function radians(degrees) {}
}

/**
 * distance(), radians() 함수도 totalDistance 안의 어떤 것에도 의존하지 않으니, 전부 최상위 처리
 */

function trackSummary(points) {}
function totalDistance(points) {}
function distance(p1, p2) {}
function radians(degrees) {}
