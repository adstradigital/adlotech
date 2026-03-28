const M = [810, 900];
const C1 = [[770, 840], [720, 770], [620, 700]];
const C2 = [[500, 620], [380, 560], [410, 500]];
const C3 = [[450, 430], [620, 390], [700, 330]];
const C4 = [[770, 280], [760, 220], [610, 170]];
const C5 = [[470, 120], [300, 95], [20, 50]];

const curves = [ [M, ...C1], [C1[2], ...C2], [C2[2], ...C3], [C3[2], ...C4], [C4[2], ...C5] ];

function getPointList() {
    let points = [];
    for (let i = 0; i < curves.length; i++) {
        const [p0, p1, p2, p3] = curves[i];
        for (let t = 0; t <= 1; t += 0.005) {
            let mt = 1-t;
            let x = mt*mt*mt*p0[0] + 3*mt*mt*t*p1[0] + 3*mt*t*t*p2[0] + t*t*t*p3[0];
            let y = mt*mt*mt*p0[1] + 3*mt*mt*t*p1[1] + 3*mt*t*t*p2[1] + t*t*t*p3[1];
            points.push({x, y});
        }
    }
    return points;
}

let pts = getPointList();
let totalDist = 0;
let dists = [0];
for (let i = 1; i < pts.length; i++) {
    let dx = pts[i].x - pts[i-1].x;
    let dy = pts[i].y - pts[i-1].y;
    let d = Math.sqrt(dx*dx + dy*dy);
    totalDist += d;
    dists.push(totalDist);
}

// target 6 points spanning 5% to 95% of total length.
// Wait, Month 1 is the START (bottom), Month 6 is the END (top).
let targetPercents = [0.05, 0.23, 0.41, 0.59, 0.77, 0.95];

targetPercents.forEach((p, index) => {
    let targetD = p * totalDist;
    let idx = dists.findIndex(d => d >= targetD);
    if (idx === -1) idx = pts.length - 1;
    let pt = pts[idx];
    
    // Convert tip to x_pct, y_pct
    let x_pct = (pt.x - 35) / 10;
    let y_pct = (pt.y - 95) / 9;
    
    console.log(`{ x: '${x_pct.toFixed(1)}%', y: '${y_pct.toFixed(1)}%' }, // Month ${index + 1}`);
});
