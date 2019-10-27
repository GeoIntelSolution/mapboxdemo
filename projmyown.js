function GuassXYToBL(X,Y)
{
    var ProjNo;
    var ZoneWide;
    var lat,lon;
    var longitude1, latitude1, longitude0, X0, Y0, xval, yval;// latitude0,  
    var e1, e2, f, a, ee, NN, T, C, M, D, R, u, fai, iPI;
    iPI=0.0174532925199433;
    a=6378137;f=1/298.257222101;
    // a=6378245.0;f=1/298.3;
    
    ZoneWide=3;
    ProjNo = parseInt(X / 1000000,10); // 查找带号  
    // longitude0 = (ProjNo - 1) * ZoneWide + ZoneWide / 2;  
    longitude0=120;
    longitude0 = longitude0 * iPI; // 中央经线  

    X0 = ProjNo * 1000000 + 500000;  
    Y0 = 0;  
    xval = X - X0;  
    yval = Y - Y0; // 带内大地坐标  
    e2 = 2 * f - f * f;  
    e1 = (1.0 - Math.sqrt(1 - e2)) / (1.0 + Math.sqrt(1 - e2));  
    ee = e2 / (1 - e2);  
    M = yval;  
    u = M / (a * (1 - e2 / 4 - 3 * e2 * e2 / 64 - 5 * e2 * e2 * e2 / 256));  
    fai = u + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * u) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * u) + (151 * e1 * e1 * e1 / 96) * Math.sin(6 * u) + (1097 * e1 * e1 * e1 * e1 / 512) * Math.sin(8 * u);  
    C = ee * Math.cos(fai) * Math.cos(fai);  
    T = Math.tan(fai) * Math.tan(fai);  
    NN = a / Math.sqrt(1.0 - e2 * Math.sin(fai) * Math.sin(fai));  
    R = a * (1 - e2) / Math.sqrt((1 - e2 * Math.sin(fai) * Math.sin(fai)) * (1 - e2 * Math.sin(fai) * Math.sin(fai)) * (1 - e2 * Math.sin(fai) * Math.sin(fai)));  
    D = xval / NN;  
    // 计算经度(Longitude) 纬度(Latitude)  
    longitude1 = longitude0 + (D - (1 + 2 * T + C) * D * D * D / 6 + (5 - 2 * C + 28 * T - 3 * C * C + 8 * ee + 24 * T * T) * D * D * D * D * D / 120) / Math.cos(fai);  
    latitude1 = fai - (NN * Math.tan(fai) / R) * (D * D / 2 - (5 + 3 * T + 10 * C - 4 * C * C - 9 * ee) * D * D * D * D / 24 + (61 + 90 * T + 298 * C + 45 * T * T - 256 * ee - 3 * C * C) * D * D * D * D * D * D / 720);  

    lon=longitude1/iPI;
    lat = latitude1/iPI;
    console.log(lon,lat);
}
GuassXYToBL(525021.8493,3386435.5)
GuassXYToBL(3386435.5,525021.8493)
