import React, { useCallback, useEffect, useRef } from "react";
import './css/pointMap.css'


// 구글맵 API 불러와 사용
function PointMap({setIndex}) {
    // useRef 훅을 사용하여 맵이 나타날 div 요소 참조
    const mapRef = useRef(null);

    // useCallback 훅을 사용하여 초기화 함수 작성(initMap)
    const initMap = useCallback(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 35.131525, lng: 129.102670 },
            zoom: 12,
        });

        // 여러개의 마커 생성
        const markers = [
            {
                position: { lat: 35.063628, lng: 129.021395 },
            },
            {
                position: { lat: 35.068351, lng: 129.065051 },
            },
            {
                position: { lat: 35.124877, lng: 129.124511 },
            }
        ];

        markers.forEach((markerInfo,index) => {
            const marker = new window.google.maps.Marker({
                position: markerInfo.position,
                map: map,
            });

            // 마커 클릭 시 정보창 표시
            const infoWindow = new window.google.maps.InfoWindow({
                content: `${index+1}번 째 포인트`,
            });
            marker.addListener("click", () => {
                infoWindow.open(map, marker);
                setIndex(index)
            });
        });
    }, [mapRef]);

    useEffect(() => {
        initMap();
    }, [initMap]);

    return (
        <div className="google-map">
            <h1>PointMap</h1>
            <div
                className="map"
                style={{ width: "1000px", height: "800px", margin: "auto" }}
                ref={mapRef}
            ></div>
        </div>
    );
}

export default PointMap;