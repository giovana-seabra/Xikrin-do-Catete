var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Xikrin_1 = new ol.format.GeoJSON();
var features_Xikrin_1 = format_Xikrin_1.readFeatures(json_Xikrin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Xikrin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Xikrin_1.addFeatures(features_Xikrin_1);
var lyr_Xikrin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Xikrin_1, 
                style: style_Xikrin_1,
                popuplayertitle: 'Xikrin',
                interactive: false,
                title: '<img src="styles/legend/Xikrin_1.png" /> Xikrin'
            });
var format_Aldeias_Xikrins_2 = new ol.format.GeoJSON();
var features_Aldeias_Xikrins_2 = format_Aldeias_Xikrins_2.readFeatures(json_Aldeias_Xikrins_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aldeias_Xikrins_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aldeias_Xikrins_2.addFeatures(features_Aldeias_Xikrins_2);
var lyr_Aldeias_Xikrins_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aldeias_Xikrins_2, 
                style: style_Aldeias_Xikrins_2,
                popuplayertitle: 'Aldeias_Xikrins',
                interactive: true,
                title: '<img src="styles/legend/Aldeias_Xikrins_2.png" /> Aldeias_Xikrins'
            });
var format_Estradas_atualizado_3 = new ol.format.GeoJSON();
var features_Estradas_atualizado_3 = format_Estradas_atualizado_3.readFeatures(json_Estradas_atualizado_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_atualizado_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_atualizado_3.addFeatures(features_Estradas_atualizado_3);
var lyr_Estradas_atualizado_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradas_atualizado_3, 
                style: style_Estradas_atualizado_3,
                popuplayertitle: 'Estradas_atualizado',
                interactive: true,
                title: '<img src="styles/legend/Estradas_atualizado_3.png" /> Estradas_atualizado'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Xikrin_1.setVisible(false);lyr_Aldeias_Xikrins_2.setVisible(true);lyr_Estradas_atualizado_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Xikrin_1,lyr_Aldeias_Xikrins_2,lyr_Estradas_atualizado_3];
lyr_Xikrin_1.set('fieldAliases', {'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_Aldeias_Xikrins_2.set('fieldAliases', {'cod_aldeia': 'cod_aldeia', 'nome_aldei': 'nome_aldei', 'cod_ti': 'cod_ti', 'cod_munici': 'cod_munici', 'data_cadas': 'data_cadas', 'flag_ativo': 'flag_ativo', 'nome_cr': 'nome_cr', 'nommunic': 'nommunic', 'nomuf': 'nomuf', 'undadm_cod': 'undadm_cod', 'coord_lat': 'coord_lat', 'coord_long': 'coord_long', });
lyr_Estradas_atualizado_3.set('fieldAliases', {'geometriaa': 'geometriaa', 'tipovia': 'tipovia', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'revestimen': 'revestimen', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'canteirodi': 'canteirodi', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavime': 'tipopavime', 'sigla': 'sigla', 'acostament': 'acostament', 'codtrechor': 'codtrechor', 'limitevelo': 'limitevelo', 'emperimetr': 'emperimetr', 'ID': 'ID', 'categoria': 'categoria', 'parent_id': 'parent_id', 'Label': 'Label', 'id_trecho_': 'id_trecho_', 'vl_br': 'vl_br', 'sg_uf': 'sg_uf', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_obra': 'ds_obra', 'ds_coinc': 'ds_coinc', 'ds_tipo_ad': 'ds_tipo_ad', 'ds_ato_leg': 'ds_ato_leg', 'est_coinc': 'est_coinc', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_superfi': 'ds_superfi', 'ds_legenda': 'ds_legenda', 'sg_legenda': 'sg_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'id_versao': 'id_versao', 'marcador': 'marcador', });
lyr_Xikrin_1.set('fieldImages', {'osm_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'extratags': 'TextEdit', });
lyr_Aldeias_Xikrins_2.set('fieldImages', {'cod_aldeia': 'Range', 'nome_aldei': 'TextEdit', 'cod_ti': 'Range', 'cod_munici': 'Range', 'data_cadas': 'TextEdit', 'flag_ativo': 'TextEdit', 'nome_cr': 'TextEdit', 'nommunic': 'TextEdit', 'nomuf': 'TextEdit', 'undadm_cod': 'TextEdit', 'coord_lat': 'TextEdit', 'coord_long': 'TextEdit', });
lyr_Estradas_atualizado_3.set('fieldImages', {'geometriaa': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'revestimen': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'canteirodi': 'TextEdit', 'nrpistas': 'Range', 'nrfaixas': 'Range', 'trafego': 'TextEdit', 'tipopavime': 'TextEdit', 'sigla': 'TextEdit', 'acostament': 'TextEdit', 'codtrechor': 'TextEdit', 'limitevelo': 'TextEdit', 'emperimetr': 'TextEdit', 'ID': 'TextEdit', 'categoria': 'TextEdit', 'parent_id': 'TextEdit', 'Label': 'TextEdit', 'id_trecho_': 'TextEdit', 'vl_br': 'TextEdit', 'sg_uf': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_obra': 'TextEdit', 'ds_coinc': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'ds_ato_leg': 'TextEdit', 'est_coinc': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_superfi': 'TextEdit', 'ds_legenda': 'TextEdit', 'sg_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'id_versao': 'TextEdit', 'marcador': 'TextEdit', });
lyr_Xikrin_1.set('fieldLabels', {'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_Aldeias_Xikrins_2.set('fieldLabels', {'cod_aldeia': 'no label', 'nome_aldei': 'no label', 'cod_ti': 'no label', 'cod_munici': 'no label', 'data_cadas': 'no label', 'flag_ativo': 'no label', 'nome_cr': 'no label', 'nommunic': 'no label', 'nomuf': 'no label', 'undadm_cod': 'no label', 'coord_lat': 'no label', 'coord_long': 'no label', });
lyr_Estradas_atualizado_3.set('fieldLabels', {'geometriaa': 'no label', 'tipovia': 'no label', 'jurisdicao': 'no label', 'administra': 'no label', 'concession': 'no label', 'revestimen': 'no label', 'operaciona': 'no label', 'situacaofi': 'no label', 'canteirodi': 'no label', 'nrpistas': 'no label', 'nrfaixas': 'no label', 'trafego': 'no label', 'tipopavime': 'no label', 'sigla': 'no label', 'acostament': 'no label', 'codtrechor': 'no label', 'limitevelo': 'no label', 'emperimetr': 'no label', 'ID': 'no label', 'categoria': 'no label', 'parent_id': 'no label', 'Label': 'no label', 'id_trecho_': 'no label', 'vl_br': 'no label', 'sg_uf': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_obra': 'no label', 'ds_coinc': 'no label', 'ds_tipo_ad': 'no label', 'ds_ato_leg': 'no label', 'est_coinc': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_superfi': 'no label', 'ds_legenda': 'no label', 'sg_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'id_versao': 'no label', 'marcador': 'no label', });
lyr_Estradas_atualizado_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});