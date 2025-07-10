// Ока-Тур: Интерактивная карта маршрута
// Extracted from oka-tour-canvas-map.html for reuse

// Реальные координаты из GPX (расширенная выборка для более точного маршрута)
const routeCoords = [
    {lat: 54.9651841, lon: 37.5829032, ele: 172},
    {lat: 54.9653065, lon: 37.5828525, ele: 171.5},
    {lat: 54.9650201, lon: 37.5811225, ele: 171},
    {lat: 54.9648123, lon: 37.5798646, ele: 171.5},
    {lat: 54.9642626, lon: 37.5761336, ele: 171.5},
    {lat: 54.9642626, lon: 37.5748032, ele: 172.5},
    {lat: 54.9634957, lon: 37.5714827, ele: 172.2},
    {lat: 54.9601556, lon: 37.5639725, ele: 170},
    {lat: 54.9590961, lon: 37.5660646, ele: 176.6},
    {lat: 54.9573004, lon: 37.5659949, ele: 175.8},
    {lat: 54.9551935, lon: 37.5626367, ele: 171.2},
    {lat: 54.9536287, lon: 37.5652438, ele: 172},
    {lat: 54.9517819, lon: 37.567049, ele: 178},
    {lat: 54.9495962, lon: 37.5508967, ele: 176},
    {lat: 54.9450102, lon: 37.5514814, ele: 180},
    {lat: 54.9435559, lon: 37.5516665, ele: 179.3},
    {lat: 54.9325035, lon: 37.5530773, ele: 174},
    {lat: 54.9234211, lon: 37.5541905, ele: 173},
    {lat: 54.9198696, lon: 37.5565857, ele: 167},
    {lat: 54.9185192, lon: 37.5574386, ele: 170},
    {lat: 54.9138374, lon: 37.5655594, ele: 168.8}, // Данки
    {lat: 54.911984, lon: 37.5600269, ele: 161},
    {lat: 54.9110003, lon: 37.5598955, ele: 153},
    {lat: 54.9091361, lon: 37.5554001, ele: 143.5},
    {lat: 54.9089927, lon: 37.5526938, ele: 155},
    {lat: 54.9097868, lon: 37.5485739, ele: 161.8},
    {lat: 54.9091824, lon: 37.545433, ele: 165.2},
    {lat: 54.9074739, lon: 37.5426784, ele: 168.2},
    {lat: 54.9058547, lon: 37.5398567, ele: 167},
    {lat: 54.9054871, lon: 37.5345535, ele: 167.9},
    {lat: 54.894684, lon: 37.528739, ele: 135.8},
    {lat: 54.8925769, lon: 37.525818, ele: 128.2},
    {lat: 54.8857922, lon: 37.527532, ele: 140.8},
    {lat: 54.8843588, lon: 37.5202417, ele: 132.2},
    {lat: 54.8839392, lon: 37.5166878, ele: 131.8},
    {lat: 54.8802854, lon: 37.5156847, ele: 129.8},
    {lat: 54.8774801, lon: 37.5143597, ele: 124.5},
    {lat: 54.8747687, lon: 37.510559, ele: 112.3},
    {lat: 54.8723874, lon: 37.5070372, ele: 115},
    {lat: 54.8674545, lon: 37.501873, ele: 119}, // М-2
    {lat: 54.8625813, lon: 37.4952704, ele: 117},
    {lat: 54.8593023, lon: 37.4869341, ele: 116},
    {lat: 54.856704, lon: 37.4815187, ele: 128.5},
    {lat: 54.8532392, lon: 37.4868375, ele: 123.8},
    {lat: 54.8507069, lon: 37.4915448, ele: 123.2},
    {lat: 54.8476678, lon: 37.4999347, ele: 119.2},
    {lat: 54.8458656, lon: 37.5045642, ele: 122.2},
    {lat: 54.8447552, lon: 37.5092179, ele: 125.2},
    {lat: 54.843647, lon: 37.5099144, ele: 125.2}, // Костино
    {lat: 54.8430362, lon: 37.5129354, ele: 125.5},
    {lat: 54.8437189, lon: 37.5185359, ele: 123.1},
    {lat: 54.8446193, lon: 37.5236025, ele: 119.2},
    {lat: 54.8448262, lon: 37.5284681, ele: 118.8},
    {lat: 54.8441158, lon: 37.5335401, ele: 118.2},
    {lat: 54.8431691, lon: 37.5402886, ele: 119.8},
    {lat: 54.8424092, lon: 37.5461143, ele: 123.2},
    {lat: 54.8420215, lon: 37.5519079, ele: 121.8},
    {lat: 54.8419875, lon: 37.5561807, ele: 120},
    {lat: 54.8414516, lon: 37.5594288, ele: 121.8},
    {lat: 54.8409820, lon: 37.5613037, ele: 122.8},
    {lat: 54.8401912, lon: 37.5651339, ele: 121.5},
    {lat: 54.8398607, lon: 37.5664884, ele: 118.8},
    {lat: 54.8395147, lon: 37.5701442, ele: 121.5},
    {lat: 54.839334, lon: 37.5735828, ele: 121},
    {lat: 54.8391455, lon: 37.5774962, ele: 120.8},
    {lat: 54.8389849, lon: 37.5795668, ele: 120.2},
    {lat: 54.8383547, lon: 37.5877395, ele: 117},
    {lat: 54.8380025, lon: 37.5918192, ele: 115.8},
    {lat: 54.8382574, lon: 37.5958693, ele: 142.2},
    {lat: 54.8391266, lon: 37.5967865, ele: 147.5}, // Усадьба
    {lat: 54.8396225, lon: 37.6033974, ele: 138}, // Водопад
    {lat: 54.8387084, lon: 37.6027706, ele: 156},
    {lat: 54.8390621, lon: 37.6089102, ele: 160.3},
    {lat: 54.8389602, lon: 37.6107261, ele: 162},
    {lat: 54.8384829, lon: 37.6120296, ele: 166.5},
    {lat: 54.8374109, lon: 37.6129496, ele: 173.2},
    {lat: 54.8360593, lon: 37.6133895, ele: 184},
    {lat: 54.8354707, lon: 37.6190785, ele: 182.5},
    {lat: 54.8350753, lon: 37.6232117, ele: 181},
    {lat: 54.8346149, lon: 37.6281443, ele: 181.5},
    {lat: 54.8330083, lon: 37.6344797, ele: 181.8},
    {lat: 54.8335042, lon: 37.6377225, ele: 177},
    {lat: 54.8350243, lon: 37.6380712, ele: 168},
    {lat: 54.8373661, lon: 37.637921, ele: 148},
    {lat: 54.8385400, lon: 37.6406354, ele: 137.2},
    {lat: 54.8396614, lon: 37.64166, ele: 132.5},
    {lat: 54.8437498, lon: 37.6408044, ele: 116.5},
    {lat: 54.8480755, lon: 37.6402733, ele: 114.5},
    {lat: 54.8487473, lon: 37.6404686, ele: 110.9}, // Пляж
    // Обратный путь (сокращенно)
    {lat: 54.8480755, lon: 37.6402733, ele: 114.5},
    {lat: 54.8437498, lon: 37.6408044, ele: 116.5},
    {lat: 54.8396414, lon: 37.6016173, ele: 131},
    {lat: 54.8420215, lon: 37.5519079, ele: 121.8},
    {lat: 54.843647, lon: 37.5099144, ele: 125.2},
    {lat: 54.8674545, lon: 37.501873, ele: 119},
    {lat: 54.9054871, lon: 37.5345535, ele: 167.9},
    {lat: 54.9138374, lon: 37.5655594, ele: 168.8},
    {lat: 54.9495962, lon: 37.5508967, ele: 176},
    {lat: 54.9651841, lon: 37.5829032, ele: 172}
];

// Ключевые точки
const keyPoints = [
    {lat: 54.9651841, lon: 37.5829032, name: "Старт/Финиш: Арнеево", desc: "Дом Богдана"},
    {lat: 54.9138374, lon: 37.5655594, name: "Данки", desc: "Первая остановка"},
    {lat: 54.8674545, lon: 37.501873, name: "Трасса М-2 Крым", desc: "Пересечение с федеральной трассой"},
    {lat: 54.843647, lon: 37.5099144, name: "Костино", desc: "Лесные тропы и подъёмы"},
    {lat: 54.8391266, lon: 37.5967865, name: "Пущинская усадьба", desc: "Историческое место"},
    {lat: 54.8396225, lon: 37.6033974, name: "Пущинский водопад", desc: "Природная достопримечательность"},
    {lat: 54.8487473, lon: 37.6404686, name: "Пляж Пущино", desc: "Отдых у воды"}
];

// Тайловые карты
const mapTileProviders = {
    osm: {
        name: 'OpenStreetMap',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors'
    },
    satellite: {
        name: 'Спутник',
        url: 'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg',
        attribution: '© EOX IT Services GmbH'
    },
    terrain: {
        name: 'Рельеф',
        url: 'https://stamen-tiles-a.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
        attribution: '© Stamen Design, © OpenStreetMap contributors'
    }
};

// Кэш загруженных тайлов
const tileCache = new Map();

// Функция загрузки тайла
function loadTile(url) {
    return new Promise((resolve, reject) => {
        if (tileCache.has(url)) {
            resolve(tileCache.get(url));
            return;
        }
        
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            tileCache.set(url, img);
            resolve(img);
        };
        img.onerror = () => reject(new Error(`Не удалось загрузить тайл: ${url}`));
        img.src = url;
    });
}

// Функция преобразования координат в тайловые
function deg2tile(lat_deg, lon_deg, zoom) {
    const lat_rad = lat_deg * Math.PI / 180;
    const n = Math.pow(2, zoom);
    const x = Math.floor((lon_deg + 180) / 360 * n);
    const y = Math.floor((1 - Math.asinh(Math.tan(lat_rad)) / Math.PI) / 2 * n);
    return {x, y};
}

// Функция преобразования тайловых координат в географические
function tile2deg(x, y, zoom) {
    const n = Math.pow(2, zoom);
    const lon_deg = x / n * 360 - 180;
    const lat_rad = Math.atan(Math.sinh(Math.PI * (1 - 2 * y / n)));
    const lat_deg = lat_rad * 180 / Math.PI;
    return {lat: lat_deg, lon: lon_deg};
}

// Функция инициализации интерактивной карты
function initInteractiveMap(canvasId, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        console.error(`Canvas с ID "${canvasId}" не найден`);
        return null;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Масштабирование и позиционирование
    let zoom = options.initialZoom || 1;
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let startX, startY;
    let mapStyle = options.style || 'dark'; // dark, light, terrain, osm, satellite
    let showSatellite = false;
    
    // Расчет границ маршрута
    const bounds = {
        minLat: Math.min(...routeCoords.map(p => p.lat)),
        maxLat: Math.max(...routeCoords.map(p => p.lat)),
        minLon: Math.min(...routeCoords.map(p => p.lon)),
        maxLon: Math.max(...routeCoords.map(p => p.lon))
    };
    
    // Преобразование координат в пиксели
    function latLonToPixel(lat, lon) {
        const padding = 0.05; // 5% отступ с каждой стороны
        const x = ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * canvas.width * (1 - 2 * padding) + canvas.width * padding;
        const y = canvas.height - ((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * canvas.height * (1 - 2 * padding) - canvas.height * padding;
        return {
            x: x * zoom + offsetX,
            y: y * zoom + offsetY
        };
    }
    
    // Функция отрисовки спутниковых снимков
    async function drawSatelliteTiles() {
        if (!showSatellite) return;
        
        // Определяем зум-уровень для тайлов (ограничиваем для производительности)
        const tileZoom = Math.max(8, Math.min(14, Math.floor(10 + zoom)));
        
        // Центр карты в географических координатах
        const centerLat = (bounds.minLat + bounds.maxLat) / 2;
        const centerLon = (bounds.minLon + bounds.maxLon) / 2;
        
        // Определяем видимую область
        const viewWidth = canvas.width / zoom;
        const viewHeight = canvas.height / zoom;
        
        // Расчитываем границы видимых тайлов
        const centerTile = deg2tile(centerLat, centerLon, tileZoom);
        const tilesWide = Math.ceil(viewWidth / 256) + 2;
        const tilesHigh = Math.ceil(viewHeight / 256) + 2;
        
        const startX = centerTile.x - Math.floor(tilesWide / 2);
        const startY = centerTile.y - Math.floor(tilesHigh / 2);
        
        // Загружаем и отрисовываем тайлы
        const tilePromises = [];
        
        for (let x = startX; x < startX + tilesWide; x++) {
            for (let y = startY; y < startY + tilesHigh; y++) {
                // Проверяем валидность координат тайла
                if (x < 0 || y < 0 || x >= Math.pow(2, tileZoom) || y >= Math.pow(2, tileZoom)) {
                    continue;
                }
                
                const tileUrl = mapTileProviders.satellite.url
                    .replace('{z}', tileZoom)
                    .replace('{x}', x)
                    .replace('{y}', y);
                
                tilePromises.push(
                    loadTile(tileUrl).then(img => {
                        // Преобразуем тайловые координаты в координаты canvas
                        const tileTopLeft = tile2deg(x, y, tileZoom);
                        const tileBottomRight = tile2deg(x + 1, y + 1, tileZoom);
                        
                        const pixelTopLeft = latLonToPixel(tileTopLeft.lat, tileTopLeft.lon);
                        const pixelBottomRight = latLonToPixel(tileBottomRight.lat, tileBottomRight.lon);
                        
                        const tileWidth = Math.abs(pixelBottomRight.x - pixelTopLeft.x);
                        const tileHeight = Math.abs(pixelBottomRight.y - pixelTopLeft.y);
                        
                        return {
                            img,
                            x: Math.min(pixelTopLeft.x, pixelBottomRight.x),
                            y: Math.min(pixelTopLeft.y, pixelBottomRight.y),
                            width: tileWidth,
                            height: tileHeight
                        };
                    }).catch(err => {
                        console.warn(`Не удалось загрузить тайл ${tileUrl}:`, err);
                        return null;
                    })
                );
            }
        }
        
        try {
            const tiles = await Promise.all(tilePromises);
            tiles.filter(tile => tile !== null).forEach(tile => {
                ctx.globalAlpha = 0.8; // Полупрозрачность для лучшего вида маршрута
                ctx.drawImage(tile.img, tile.x, tile.y, tile.width, tile.height);
                ctx.globalAlpha = 1.0;
            });
        } catch (error) {
            console.error('Ошибка загрузки спутниковых снимков:', error);
        }
    }
    
    // Отрисовка карты
    async function drawMap() {
        // Очистка canvas
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Отрисовка спутниковых снимков (если включено)
        if (showSatellite) {
            await drawSatelliteTiles();
        } else {
            // Стилизованный фон в зависимости от темы
            if (mapStyle === 'terrain') {
                // Рельефный стиль
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#2d5a2d');
                gradient.addColorStop(0.3, '#1e3a1e');
                gradient.addColorStop(0.7, '#0f2f0f');
                gradient.addColorStop(1, '#0a1f0a');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Имитация рельефа - контурные линии
                ctx.strokeStyle = 'rgba(139, 195, 74, 0.15)';
                ctx.lineWidth = 0.5;
                
                // Горизонтальные волнистые линии
                for (let i = 0; i < 30; i++) {
                    ctx.beginPath();
                    const baseY = (canvas.height / 30) * i;
                    ctx.moveTo(0, baseY);
                    
                    for (let x = 0; x < canvas.width; x += 5) {
                        const waveY = baseY + Math.sin((x + i * 20) * 0.02) * 10 * Math.cos(i * 0.3);
                        ctx.lineTo(x, waveY);
                    }
                    ctx.stroke();
                }
            } else {
                // Обычный фон
                ctx.fillStyle = mapStyle === 'dark' ? '#1e293b' : '#f1f5f9';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                // Сетка координат
                ctx.strokeStyle = mapStyle === 'dark' ? '#334155' : '#e2e8f0';
                ctx.lineWidth = 0.5;
                for (let i = 0; i <= 10; i++) {
                    const x = (canvas.width / 10) * i;
                    const y = (canvas.height / 10) * i;
                    ctx.beginPath();
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, canvas.height);
                    ctx.moveTo(0, y);
                    ctx.lineTo(canvas.width, y);
                    ctx.stroke();
                }
            }
        }
        
        // Отрисовка маршрута
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 4 * zoom;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
        ctx.beginPath();
        
        routeCoords.forEach((coord, index) => {
            const point = latLonToPixel(coord.lat, coord.lon);
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        
        ctx.stroke();
        
        // Дополнительная обводка для лучшей видимости
        if (mapStyle === 'terrain') {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 6 * zoom;
            ctx.shadowBlur = 0;
            ctx.stroke();
        }
        
        ctx.shadowBlur = 0;
        
        // Отрисовка ключевых точек
        keyPoints.forEach((point, index) => {
            const pixel = latLonToPixel(point.lat, point.lon);
            
            // Тень
            ctx.beginPath();
            ctx.arc(pixel.x, pixel.y + 2, 16 * zoom, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.fill();
            
            // Градиент для точки
            const gradient = ctx.createRadialGradient(pixel.x, pixel.y, 0, pixel.x, pixel.y, 16 * zoom);
            gradient.addColorStop(0, '#c084fc');
            gradient.addColorStop(1, '#38bdf8');
            
            // Основной круг
            ctx.beginPath();
            ctx.arc(pixel.x, pixel.y, 16 * zoom, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 3 * zoom;
            ctx.stroke();
            
            // Номер точки
            ctx.fillStyle = 'white';
            ctx.font = `bold ${14 * zoom}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(index + 1, pixel.x, pixel.y);
            
            // Название точки
            if (zoom > 1.5) {
                ctx.font = `bold ${12 * zoom}px Arial`;
                ctx.textAlign = 'center';
                // Обводка для лучшей читаемости
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
                ctx.lineWidth = 4;
                ctx.strokeText(point.name, pixel.x, pixel.y + 25 * zoom);
                // Основной текст
                ctx.fillStyle = 'white';
                ctx.fillText(point.name, pixel.x, pixel.y + 25 * zoom);
            }
        });
        
        // Масштабная линейка
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 3;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
        ctx.beginPath();
        ctx.moveTo(20, canvas.height - 20);
        ctx.lineTo(120, canvas.height - 20);
        ctx.stroke();
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Arial';
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
        ctx.fillText('~5 км', 125, canvas.height - 16);
        ctx.shadowBlur = 0;
    }
    
    // Адаптивность canvas
    function resizeCanvas() {
        const container = canvas.parentElement;
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width - 48; // padding
        canvas.height = options.height || 600;
        drawMap();
    }
    
    // Функция проверки клика по ключевой точке
    function getClickedPoint(clientX, clientY) {
        const rect = canvas.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        
        for (let i = 0; i < keyPoints.length; i++) {
            const point = keyPoints[i];
            const pixel = latLonToPixel(point.lat, point.lon);
            const distance = Math.sqrt(
                Math.pow(x - pixel.x, 2) + Math.pow(y - pixel.y, 2)
            );
            
            // Проверяем попадание в радиус точки (с учетом зума)
            if (distance <= 16 * zoom) {
                return { index: i, point: point };
            }
        }
        return null;
    }
    
    // События для управления картой
    canvas.addEventListener('mousedown', (e) => {
        const clickedPoint = getClickedPoint(e.clientX, e.clientY);
        if (clickedPoint) {
            // Вызываем callback для клика по точке, если он задан
            if (options.onPointClick) {
                options.onPointClick(clickedPoint.point, clickedPoint.index);
            }
            return;
        }
        
        isDragging = true;
        startX = e.clientX - offsetX;
        startY = e.clientY - offsetY;
        canvas.style.cursor = 'grabbing';
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
            offsetX = e.clientX - startX;
            offsetY = e.clientY - startY;
            drawMap();
        } else {
            canvas.style.cursor = 'move';
        }
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        canvas.style.cursor = 'move';
    });
    
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        zoom *= delta;
        zoom = Math.max(0.5, Math.min(5, zoom));
        drawMap();
    });
    
    // Поддержка сенсорных устройств
    let touchStartDistance = 0;
    let touchStartZoom = zoom;
    
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX - offsetX;
            startY = e.touches[0].clientY - offsetY;
        } else if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            touchStartDistance = Math.sqrt(dx * dx + dy * dy);
            touchStartZoom = zoom;
        }
    });
    
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (e.touches.length === 1 && isDragging) {
            offsetX = e.touches[0].clientX - startX;
            offsetY = e.touches[0].clientY - startY;
            drawMap();
        } else if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            zoom = touchStartZoom * (distance / touchStartDistance);
            zoom = Math.max(0.5, Math.min(5, zoom));
            drawMap();
        }
    });
    
    canvas.addEventListener('touchend', (e) => {
        isDragging = false;
    });
    
    // Инициализация
    window.addEventListener('resize', resizeCanvas);
    setTimeout(resizeCanvas, 100);
    
    // Возвращаем API для управления картой
    return {
        zoomIn: () => {
            zoom *= 1.2;
            zoom = Math.min(5, zoom);
            drawMap();
        },
        zoomOut: () => {
            zoom *= 0.8;
            zoom = Math.max(0.5, zoom);
            drawMap();
        },
        center: () => {
            zoom = 1;
            offsetX = 0;
            offsetY = 0;
            drawMap();
        },
        setStyle: (style) => {
            if (style === 'satellite') {
                showSatellite = true;
                mapStyle = 'satellite';
            } else {
                showSatellite = false;
                mapStyle = style;
            }
            drawMap();
        },
        toggleSatellite: () => {
            showSatellite = !showSatellite;
            if (showSatellite) {
                mapStyle = 'satellite';
            } else {
                mapStyle = 'dark';
            }
            drawMap();
        },
        animateRoute: () => {
            let progress = 0;
            const animateStep = () => {
                if (progress <= routeCoords.length) {
                    // Очищаем и перерисовываем фон
                    ctx.fillStyle = mapStyle === 'dark' ? '#1e293b' : '#f1f5f9';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // Рисуем только часть маршрута
                    ctx.strokeStyle = '#38bdf8';
                    ctx.lineWidth = 4 * zoom;
                    ctx.lineJoin = 'round';
                    ctx.lineCap = 'round';
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
                    ctx.beginPath();
                    
                    for (let i = 0; i < progress && i < routeCoords.length; i++) {
                        const point = latLonToPixel(routeCoords[i].lat, routeCoords[i].lon);
                        if (i === 0) {
                            ctx.moveTo(point.x, point.y);
                        } else {
                            ctx.lineTo(point.x, point.y);
                        }
                    }
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                    
                    progress += 3;
                    requestAnimationFrame(animateStep);
                } else {
                    drawMap();
                }
            };
            animateStep();
        },
        download: () => {
            const link = document.createElement('a');
            link.download = 'oka-tour-map.png';
            link.href = canvas.toDataURL();
            link.click();
        },
        getStats: () => {
            let totalDistance = 0;
            let totalElevationGain = 0;
            let maxElevation = 0;
            
            for (let i = 1; i < routeCoords.length; i++) {
                const lat1 = routeCoords[i-1].lat * Math.PI / 180;
                const lat2 = routeCoords[i].lat * Math.PI / 180;
                const deltaLat = (routeCoords[i].lat - routeCoords[i-1].lat) * Math.PI / 180;
                const deltaLon = (routeCoords[i].lon - routeCoords[i-1].lon) * Math.PI / 180;
                
                const a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
                        Math.cos(lat1) * Math.cos(lat2) *
                        Math.sin(deltaLon/2) * Math.sin(deltaLon/2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                const distance = 6371 * c;
                
                totalDistance += distance;
                
                const elevDiff = routeCoords[i].ele - routeCoords[i-1].ele;
                if (elevDiff > 0) {
                    totalElevationGain += elevDiff;
                }
                
                if (routeCoords[i].ele > maxElevation) {
                    maxElevation = routeCoords[i].ele;
                }
            }
            
            return {
                distance: totalDistance,
                elevationGain: Math.round(totalElevationGain),
                maxElevation: Math.round(maxElevation)
            };
        },
        createWaypointsList: (containerId) => {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            keyPoints.forEach((point, index) => {
                const div = document.createElement('div');
                div.className = 'flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer';
                div.innerHTML = `
                    <div class="point-marker">${index + 1}</div>
                    <div class="flex-1">
                        <h4 class="font-semibold">${point.name}</h4>
                        <p class="text-sm text-slate-400">${point.desc}</p>
                    </div>
                `;
                div.addEventListener('click', () => {
                    const pixel = latLonToPixel(point.lat, point.lon);
                    offsetX = canvas.width / 2 - pixel.x;
                    offsetY = canvas.height / 2 - pixel.y;
                    zoom = 2;
                    drawMap();
                });
                container.appendChild(div);
            });
        }
    };
}

// Экспортируем для использования
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initInteractiveMap, routeCoords, keyPoints };
}