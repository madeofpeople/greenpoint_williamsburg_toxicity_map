var app = app || {} 
app.cartocss = (function(){ 
  return {"asthma":"#asthma_5yr{polygon-fill:#FFFFFF;polygon-opacity:0.7;line-color:#666666;line-width:0.2;line-opacity:0.5;polygon-comp-op:multiply;[asthma_rate_per_1000_people>=21][asthma_rate_per_1000_people<=35]{polygon-fill:#5a3072;}[asthma_rate_per_1000_people<=10][asthma_rate_per_1000_people<=20]{polygon-fill:#7a518b;}[asthma_rate_per_1000_people<=6][asthma_rate_per_1000_people<=9]{polygon-fill:#9c7aac;}[asthma_rate_per_1000_people>=1][asthma_rate_per_1000_people<=5]{polygon-fill:#bfa4cd;}}","floodrisk":"#floodrisk{polygon-fill:#2E5387;polygon-opacity:0.5;polygon-comp-op:multiply;line-color:#bfd1ff;line-width:0.3;line-opacity:0;}","income":"#acs_5yr_2013_merge_copy{polygon-fill:#ECF0F6;polygon-opacity:0.8;polygon-comp-op:multiply;line-color:#000000;line-width:0.5;line-opacity:0.1;[rounded_mhhi>75001]{polygon-fill:#216437;}[rounded_mhhi>65001][rounded_mhhi<=75000]{polygon-fill:#4f8759;}[rounded_mhhi>50001][rounded_mhhi<=65000]{polygon-fill:#75ab7e;}[rounded_mhhi>25001][rounded_mhhi<=50000]{polygon-fill:#a5d0b4;}[rounded_mhhi>0][rounded_mhhi<=25000]{polygon-fill:#dcf5e8;}}","industrial-history-lines":"#industrialhistory_lines{line-color:#000000;line-width:4;line-opacity:0.7;}","popdensity":"#acs_5yr_2013_merge_copy{line-join:round;polygon-fill:#FFFFFF;polygon-opacity:.7;polygon-comp-op:multiply;line-color:#696969;line-width:0.1;line-opacity:.5;[roundedcpop>=75001]{polygon-fill:#cfb928;}[roundedcpop>=55001][roundedcpop<=75000]{polygon-fill:#dfcd66;}[roundedcpop>=40001][roundedcpop<=55000]{polygon-fill:#e8dc91;}[roundedcpop>=25001][roundedcpop<=40000]{polygon-fill:#f0ecd7;}[roundedcpop>0][roundedcpop<=25000]{polygon-fill:#fcfaef;}[roundedcpop=0]{polygon-fill:#fff;}}","industrial-history-points":"#industrialhistory_points{marker-fill-opacity:0.9;marker-line-color:#FFF;marker-line-width:1;marker-line-opacity:1;marker-placement:point;marker-type:ellipse;marker-width:14;marker-fill:#2E5387;marker-allow-overlap:true;}","polluted-areas":"#polluted_poly_f{polygon-fill:#FFCC00;polygon-opacity:0.6;line-color:#FFF;line-width:0.4;line-opacity:1;}","polluted-points":"#polluted_points{marker-fill-opacity:0.9;marker-line-color:#FFFFFF;marker-line-width:.2;marker-line-opacity:.7;marker-placement:point;marker-type:ellipse;marker-width:7;marker-allow-overlap:false;}#polluted_points[nag_id=10]{marker-fill:#9801d6;marker-width:9;[zoom>=12]{marker-width:6;}[zoom>=13]{marker-width:8;}[zoom>=14]{marker-width:10;}[zoom>=16]{marker-width:12;}[zoom>=18]{marker-width:14;}}#polluted_points[nag_id=7]{marker-fill:#f7b699;marker-width:6;[zoom>=12]{marker-width:4;}[zoom>=13]{marker-width:5;}[zoom>=14]{marker-width:6;}[zoom>=16]{marker-width:8;}[zoom>=18]{marker-width:10;}}#polluted_points[nag_id=8]{marker-fill:#a50008;marker-width:9;[zoom>=12]{marker-width:6;}[zoom>=13]{marker-width:8;}[zoom>=14]{marker-width:10;}[zoom>=16]{marker-width:12;}[zoom>=18]{marker-width:14;}}#polluted_points[nag_id=9]{marker-fill:#e171fb;marker-width:6;[zoom>=12]{marker-width:4;}[zoom>=13]{marker-width:5;}[zoom>=14]{marker-width:6;}[zoom>=16]{marker-width:8;}[zoom>=18]{marker-width:10;}}","wts":"#wts_july30{marker-fill-opacity:0;marker-line-color:#010101;marker-line-width:3.5;marker-line-opacity:0.7;marker-placement:point;marker-type:ellipse;marker-width:7;marker-fill:#FFFFFF;marker-allow-overlap:true;[zoom>=12]{marker-width:6;marker-line-width:1.5;}[zoom>=13]{marker-width:8;marker-line-width:2.5;}[zoom>=14]{marker-width:10;marker-line-width:3.0;}[zoom>=16]{marker-width:12;marker-line-width:4;}[zoom>=18]{marker-width:14;marker-line-width:5;}}"};
})();