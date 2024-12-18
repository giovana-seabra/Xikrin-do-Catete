var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação'
            });
var format_TerrasIndgenas_2 = new ol.format.GeoJSON();
var features_TerrasIndgenas_2 = format_TerrasIndgenas_2.readFeatures(json_TerrasIndgenas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrasIndgenas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrasIndgenas_2.addFeatures(features_TerrasIndgenas_2);
var lyr_TerrasIndgenas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrasIndgenas_2, 
                style: style_TerrasIndgenas_2,
                popuplayertitle: 'Terras Indígenas',
                interactive: true,
                title: '<img src="styles/legend/TerrasIndgenas_2.png" /> Terras Indígenas'
            });
var format_RequerimentodePesquisa_3 = new ol.format.GeoJSON();
var features_RequerimentodePesquisa_3 = format_RequerimentodePesquisa_3.readFeatures(json_RequerimentodePesquisa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RequerimentodePesquisa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RequerimentodePesquisa_3.addFeatures(features_RequerimentodePesquisa_3);
var lyr_RequerimentodePesquisa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RequerimentodePesquisa_3, 
                style: style_RequerimentodePesquisa_3,
                popuplayertitle: 'Requerimento de Pesquisa',
                interactive: true,
                title: '<img src="styles/legend/RequerimentodePesquisa_3.png" /> Requerimento de Pesquisa'
            });
var format_RequerimentodeLavra_4 = new ol.format.GeoJSON();
var features_RequerimentodeLavra_4 = format_RequerimentodeLavra_4.readFeatures(json_RequerimentodeLavra_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RequerimentodeLavra_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RequerimentodeLavra_4.addFeatures(features_RequerimentodeLavra_4);
var lyr_RequerimentodeLavra_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RequerimentodeLavra_4, 
                style: style_RequerimentodeLavra_4,
                popuplayertitle: 'Requerimento de Lavra',
                interactive: true,
                title: '<img src="styles/legend/RequerimentodeLavra_4.png" /> Requerimento de Lavra'
            });
var format_DireitodeRequereraLavra_5 = new ol.format.GeoJSON();
var features_DireitodeRequereraLavra_5 = format_DireitodeRequereraLavra_5.readFeatures(json_DireitodeRequereraLavra_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DireitodeRequereraLavra_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DireitodeRequereraLavra_5.addFeatures(features_DireitodeRequereraLavra_5);
var lyr_DireitodeRequereraLavra_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DireitodeRequereraLavra_5, 
                style: style_DireitodeRequereraLavra_5,
                popuplayertitle: 'Direito de Requerer a Lavra',
                interactive: true,
                title: '<img src="styles/legend/DireitodeRequereraLavra_5.png" /> Direito de Requerer a Lavra'
            });
var format_Disponibilidade_6 = new ol.format.GeoJSON();
var features_Disponibilidade_6 = format_Disponibilidade_6.readFeatures(json_Disponibilidade_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Disponibilidade_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Disponibilidade_6.addFeatures(features_Disponibilidade_6);
var lyr_Disponibilidade_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Disponibilidade_6, 
                style: style_Disponibilidade_6,
                popuplayertitle: 'Disponibilidade',
                interactive: true,
                title: '<img src="styles/legend/Disponibilidade_6.png" /> Disponibilidade'
            });
var format_ConcessodeLavra_7 = new ol.format.GeoJSON();
var features_ConcessodeLavra_7 = format_ConcessodeLavra_7.readFeatures(json_ConcessodeLavra_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConcessodeLavra_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConcessodeLavra_7.addFeatures(features_ConcessodeLavra_7);
var lyr_ConcessodeLavra_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConcessodeLavra_7, 
                style: style_ConcessodeLavra_7,
                popuplayertitle: 'Concessão de Lavra',
                interactive: true,
                title: '<img src="styles/legend/ConcessodeLavra_7.png" /> Concessão de Lavra'
            });
var format_AutorizaodePesquisa_8 = new ol.format.GeoJSON();
var features_AutorizaodePesquisa_8 = format_AutorizaodePesquisa_8.readFeatures(json_AutorizaodePesquisa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AutorizaodePesquisa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AutorizaodePesquisa_8.addFeatures(features_AutorizaodePesquisa_8);
var lyr_AutorizaodePesquisa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AutorizaodePesquisa_8, 
                style: style_AutorizaodePesquisa_8,
                popuplayertitle: 'Autorização de Pesquisa',
                interactive: true,
                title: '<img src="styles/legend/AutorizaodePesquisa_8.png" /> Autorização de Pesquisa'
            });
var format_ImveisCertificadosSnci_9 = new ol.format.GeoJSON();
var features_ImveisCertificadosSnci_9 = format_ImveisCertificadosSnci_9.readFeatures(json_ImveisCertificadosSnci_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImveisCertificadosSnci_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisCertificadosSnci_9.addFeatures(features_ImveisCertificadosSnci_9);
var lyr_ImveisCertificadosSnci_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisCertificadosSnci_9, 
                style: style_ImveisCertificadosSnci_9,
                popuplayertitle: 'Imóveis Certificados Snci',
                interactive: true,
                title: '<img src="styles/legend/ImveisCertificadosSnci_9.png" /> Imóveis Certificados Snci'
            });
var format_ImveisCertificadosSigef_10 = new ol.format.GeoJSON();
var features_ImveisCertificadosSigef_10 = format_ImveisCertificadosSigef_10.readFeatures(json_ImveisCertificadosSigef_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImveisCertificadosSigef_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisCertificadosSigef_10.addFeatures(features_ImveisCertificadosSigef_10);
var lyr_ImveisCertificadosSigef_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisCertificadosSigef_10, 
                style: style_ImveisCertificadosSigef_10,
                popuplayertitle: 'Imóveis Certificados Sigef',
                interactive: true,
                title: '<img src="styles/legend/ImveisCertificadosSigef_10.png" /> Imóveis Certificados Sigef'
            });
var format_Cancelado_11 = new ol.format.GeoJSON();
var features_Cancelado_11 = format_Cancelado_11.readFeatures(json_Cancelado_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cancelado_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cancelado_11.addFeatures(features_Cancelado_11);
var lyr_Cancelado_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cancelado_11, 
                style: style_Cancelado_11,
                popuplayertitle: 'Cancelado',
                interactive: true,
                title: '<img src="styles/legend/Cancelado_11.png" /> Cancelado'
            });
var format_Suspenso_12 = new ol.format.GeoJSON();
var features_Suspenso_12 = format_Suspenso_12.readFeatures(json_Suspenso_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suspenso_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suspenso_12.addFeatures(features_Suspenso_12);
var lyr_Suspenso_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suspenso_12, 
                style: style_Suspenso_12,
                popuplayertitle: 'Suspenso',
                interactive: true,
                title: '<img src="styles/legend/Suspenso_12.png" /> Suspenso'
            });
var format_Pendente_13 = new ol.format.GeoJSON();
var features_Pendente_13 = format_Pendente_13.readFeatures(json_Pendente_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendente_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendente_13.addFeatures(features_Pendente_13);
var lyr_Pendente_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendente_13, 
                style: style_Pendente_13,
                popuplayertitle: 'Pendente',
                interactive: true,
                title: '<img src="styles/legend/Pendente_13.png" /> Pendente'
            });
var format_Ativo_14 = new ol.format.GeoJSON();
var features_Ativo_14 = format_Ativo_14.readFeatures(json_Ativo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ativo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ativo_14.addFeatures(features_Ativo_14);
var lyr_Ativo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ativo_14, 
                style: style_Ativo_14,
                popuplayertitle: 'Ativo',
                interactive: true,
                title: '<img src="styles/legend/Ativo_14.png" /> Ativo'
            });
var format_Buffer10km_15 = new ol.format.GeoJSON();
var features_Buffer10km_15 = format_Buffer10km_15.readFeatures(json_Buffer10km_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer10km_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer10km_15.addFeatures(features_Buffer10km_15);
var lyr_Buffer10km_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer10km_15, 
                style: style_Buffer10km_15,
                popuplayertitle: 'Buffer (10 km)',
                interactive: true,
                title: '<img src="styles/legend/Buffer10km_15.png" /> Buffer (10 km)'
            });
var format_XikrindoCatet_16 = new ol.format.GeoJSON();
var features_XikrindoCatet_16 = format_XikrindoCatet_16.readFeatures(json_XikrindoCatet_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XikrindoCatet_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XikrindoCatet_16.addFeatures(features_XikrindoCatet_16);
var lyr_XikrindoCatet_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XikrindoCatet_16, 
                style: style_XikrindoCatet_16,
                popuplayertitle: 'Xikrin do Cateté',
                interactive: true,
                title: '<img src="styles/legend/XikrindoCatet_16.png" /> Xikrin do Cateté'
            });
var format_Hidrografia_17 = new ol.format.GeoJSON();
var features_Hidrografia_17 = format_Hidrografia_17.readFeatures(json_Hidrografia_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_17.addFeatures(features_Hidrografia_17);
var lyr_Hidrografia_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografia_17, 
                style: style_Hidrografia_17,
                popuplayertitle: 'Hidrografia',
                interactive: true,
                title: '<img src="styles/legend/Hidrografia_17.png" /> Hidrografia'
            });
var format_Estradas_18 = new ol.format.GeoJSON();
var features_Estradas_18 = format_Estradas_18.readFeatures(json_Estradas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estradas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estradas_18.addFeatures(features_Estradas_18);
var lyr_Estradas_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estradas_18, 
                style: style_Estradas_18,
                popuplayertitle: 'Estradas',
                interactive: true,
                title: '<img src="styles/legend/Estradas_18.png" /> Estradas'
            });
var format_Aldeias_19 = new ol.format.GeoJSON();
var features_Aldeias_19 = format_Aldeias_19.readFeatures(json_Aldeias_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aldeias_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aldeias_19.addFeatures(features_Aldeias_19);
var lyr_Aldeias_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aldeias_19, 
                style: style_Aldeias_19,
                popuplayertitle: 'Aldeias',
                interactive: true,
                title: '<img src="styles/legend/Aldeias_19.png" /> Aldeias'
            });
var group_SituaoCAR = new ol.layer.Group({
                                layers: [lyr_Cancelado_11,lyr_Suspenso_12,lyr_Pendente_13,lyr_Ativo_14,],
                                fold: "open",
                                title: 'Situação - CAR'});
var group_ProcessosMinerrios = new ol.layer.Group({
                                layers: [lyr_RequerimentodePesquisa_3,lyr_RequerimentodeLavra_4,lyr_DireitodeRequereraLavra_5,lyr_Disponibilidade_6,lyr_ConcessodeLavra_7,lyr_AutorizaodePesquisa_8,],
                                fold: "open",
                                title: 'Processos Minerários'});

lyr_GoogleRoad_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_TerrasIndgenas_2.setVisible(false);lyr_RequerimentodePesquisa_3.setVisible(false);lyr_RequerimentodeLavra_4.setVisible(false);lyr_DireitodeRequereraLavra_5.setVisible(false);lyr_Disponibilidade_6.setVisible(false);lyr_ConcessodeLavra_7.setVisible(false);lyr_AutorizaodePesquisa_8.setVisible(false);lyr_ImveisCertificadosSnci_9.setVisible(false);lyr_ImveisCertificadosSigef_10.setVisible(false);lyr_Cancelado_11.setVisible(false);lyr_Suspenso_12.setVisible(false);lyr_Pendente_13.setVisible(false);lyr_Ativo_14.setVisible(false);lyr_Buffer10km_15.setVisible(false);lyr_XikrindoCatet_16.setVisible(true);lyr_Hidrografia_17.setVisible(true);lyr_Estradas_18.setVisible(true);lyr_Aldeias_19.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_UnidadesdeConservao_1,lyr_TerrasIndgenas_2,group_ProcessosMinerrios,lyr_ImveisCertificadosSnci_9,lyr_ImveisCertificadosSigef_10,group_SituaoCAR,lyr_Buffer10km_15,lyr_XikrindoCatet_16,lyr_Hidrografia_17,lyr_Estradas_18,lyr_Aldeias_19];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'categoria': 'categoria', 'grupo': 'grupo', 'esfera': 'esfera', 'ano_cria': 'ano_cria', });
lyr_TerrasIndgenas_2.set('fieldAliases', {'gid': 'gid', 'terrai_cod': 'terrai_cod', 'terrai_nom': 'terrai_nom', 'etnia_nome': 'etnia_nome', 'municipio_': 'municipio_', 'uf_sigla': 'uf_sigla', 'superficie': 'superficie', 'fase_ti': 'fase_ti', 'modalidade': 'modalidade', 'reestudo_t': 'reestudo_t', 'cr': 'cr', 'faixa_fron': 'faixa_fron', 'undadm_cod': 'undadm_cod', 'undadm_nom': 'undadm_nom', 'undadm_sig': 'undadm_sig', 'dominio_un': 'dominio_un', 'data_atual': 'data_atual', 'epsg': 'epsg', });
lyr_RequerimentodePesquisa_3.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_RequerimentodeLavra_4.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DireitodeRequereraLavra_5.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_Disponibilidade_6.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ConcessodeLavra_7.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_AutorizaodePesquisa_8.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ImveisCertificadosSnci_9.set('fieldAliases', {'num_proces': 'num_proces', 'sr': 'sr', 'num_certif': 'num_certif', 'data_certi': 'data_certi', 'qtd_area_p': 'qtd_area_p', 'cod_profis': 'cod_profis', 'cod_imovel': 'cod_imovel', 'nome_imove': 'nome_imove', 'uf_municip': 'uf_municip', });
lyr_ImveisCertificadosSigef_10.set('fieldAliases', {'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', });
lyr_Cancelado_11.set('fieldAliases', {'cod_imovel': 'cod_imovel', 'area_imove': 'area_imove', 'ind_status': 'ind_status', 'ind_tipo_i': 'ind_tipo_i', 'nom_imovel': 'nom_imovel', 'imo_munici': 'imo_munici', });
lyr_Suspenso_12.set('fieldAliases', {'cod_imovel': 'cod_imovel', 'area_imove': 'area_imove', 'ind_status': 'ind_status', 'ind_tipo_i': 'ind_tipo_i', 'nom_imovel': 'nom_imovel', 'imo_munici': 'imo_munici', });
lyr_Pendente_13.set('fieldAliases', {'cod_imovel': 'cod_imovel', 'area_imove': 'area_imove', 'ind_status': 'ind_status', 'ind_tipo_i': 'ind_tipo_i', 'nom_imovel': 'nom_imovel', 'imo_munici': 'imo_munici', });
lyr_Ativo_14.set('fieldAliases', {'cod_imovel': 'cod_imovel', 'area_imove': 'area_imove', 'ind_status': 'ind_status', 'ind_tipo_i': 'ind_tipo_i', 'nom_imovel': 'nom_imovel', 'imo_munici': 'imo_munici', });
lyr_Buffer10km_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'terrai_cod': 'terrai_cod', 'terrai_nom': 'terrai_nom', 'etnia_nome': 'etnia_nome', 'municipio_': 'municipio_', 'uf_sigla': 'uf_sigla', 'superficie': 'superficie', 'fase_ti': 'fase_ti', 'modalidade': 'modalidade', 'reestudo_t': 'reestudo_t', 'cr': 'cr', 'faixa_fron': 'faixa_fron', 'undadm_cod': 'undadm_cod', 'undadm_nom': 'undadm_nom', 'undadm_sig': 'undadm_sig', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area ha': 'area ha', });
lyr_XikrindoCatet_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'terrai_cod': 'terrai_cod', 'terrai_nom': 'terrai_nom', 'etnia_nome': 'etnia_nome', 'municipio_': 'municipio_', 'uf_sigla': 'uf_sigla', 'superficie': 'superficie', 'fase_ti': 'fase_ti', 'modalidade': 'modalidade', 'reestudo_t': 'reestudo_t', 'cr': 'cr', 'faixa_fron': 'faixa_fron', 'undadm_cod': 'undadm_cod', 'undadm_nom': 'undadm_nom', 'undadm_sig': 'undadm_sig', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area ha': 'area ha', });
lyr_Hidrografia_17.set('fieldAliases', {'NORIOCOMP': 'NORIOCOMP', 'CORIO': 'CORIO', });
lyr_Estradas_18.set('fieldAliases', {'geometriaa': 'geometriaa', 'tipovia': 'tipovia', 'jurisdicao': 'jurisdicao', 'administra': 'administra', 'concession': 'concession', 'revestimen': 'revestimen', 'operaciona': 'operaciona', 'situacaofi': 'situacaofi', 'canteirodi': 'canteirodi', 'nrpistas': 'nrpistas', 'nrfaixas': 'nrfaixas', 'trafego': 'trafego', 'tipopavime': 'tipopavime', 'sigla': 'sigla', 'acostament': 'acostament', 'codtrechor': 'codtrechor', 'limitevelo': 'limitevelo', 'emperimetr': 'emperimetr', 'ID': 'ID', 'categoria': 'categoria', 'parent_id': 'parent_id', 'Label': 'Label', 'id_trecho_': 'id_trecho_', 'vl_br': 'vl_br', 'sg_uf': 'sg_uf', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_obra': 'ds_obra', 'ds_coinc': 'ds_coinc', 'ds_tipo_ad': 'ds_tipo_ad', 'ds_ato_leg': 'ds_ato_leg', 'est_coinc': 'est_coinc', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_superfi': 'ds_superfi', 'ds_legenda': 'ds_legenda', 'sg_legenda': 'sg_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'id_versao': 'id_versao', 'marcador': 'marcador', });
lyr_Aldeias_19.set('fieldAliases', {'Id': 'Id', 'Aldeias': 'Aldeias', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'id': 'TextEdit', 'nome': 'TextEdit', 'categoria': 'TextEdit', 'grupo': 'TextEdit', 'esfera': 'TextEdit', 'ano_cria': 'TextEdit', });
lyr_TerrasIndgenas_2.set('fieldImages', {'gid': 'Range', 'terrai_cod': 'Range', 'terrai_nom': 'TextEdit', 'etnia_nome': 'TextEdit', 'municipio_': 'TextEdit', 'uf_sigla': 'TextEdit', 'superficie': 'TextEdit', 'fase_ti': 'TextEdit', 'modalidade': 'TextEdit', 'reestudo_t': 'TextEdit', 'cr': 'TextEdit', 'faixa_fron': 'TextEdit', 'undadm_cod': 'TextEdit', 'undadm_nom': 'TextEdit', 'undadm_sig': 'TextEdit', 'dominio_un': 'TextEdit', 'data_atual': 'TextEdit', 'epsg': 'Range', });
lyr_RequerimentodePesquisa_3.set('fieldImages', {'PROCESSO': 'TextEdit', 'NUMERO': 'Range', 'ANO': 'Range', 'AREA_HA': 'TextEdit', 'ID': 'TextEdit', 'FASE': 'TextEdit', 'ULT_EVENTO': 'TextEdit', 'NOME': 'TextEdit', 'SUBS': 'TextEdit', 'USO': 'TextEdit', 'UF': 'TextEdit', 'DSProcesso': 'TextEdit', });
lyr_RequerimentodeLavra_4.set('fieldImages', {'PROCESSO': 'TextEdit', 'NUMERO': 'Range', 'ANO': 'Range', 'AREA_HA': 'TextEdit', 'ID': 'TextEdit', 'FASE': 'TextEdit', 'ULT_EVENTO': 'TextEdit', 'NOME': 'TextEdit', 'SUBS': 'TextEdit', 'USO': 'TextEdit', 'UF': 'TextEdit', 'DSProcesso': 'TextEdit', });
lyr_DireitodeRequereraLavra_5.set('fieldImages', {'PROCESSO': 'TextEdit', 'NUMERO': 'Range', 'ANO': 'Range', 'AREA_HA': 'TextEdit', 'ID': 'TextEdit', 'FASE': 'TextEdit', 'ULT_EVENTO': 'TextEdit', 'NOME': 'TextEdit', 'SUBS': 'TextEdit', 'USO': 'TextEdit', 'UF': 'TextEdit', 'DSProcesso': 'TextEdit', });
lyr_Disponibilidade_6.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ConcessodeLavra_7.set('fieldImages', {'PROCESSO': 'TextEdit', 'NUMERO': 'Range', 'ANO': 'Range', 'AREA_HA': 'TextEdit', 'ID': 'TextEdit', 'FASE': 'TextEdit', 'ULT_EVENTO': 'TextEdit', 'NOME': 'TextEdit', 'SUBS': 'TextEdit', 'USO': 'TextEdit', 'UF': 'TextEdit', 'DSProcesso': 'TextEdit', });
lyr_AutorizaodePesquisa_8.set('fieldImages', {'PROCESSO': 'TextEdit', 'NUMERO': 'Range', 'ANO': 'Range', 'AREA_HA': 'TextEdit', 'ID': 'TextEdit', 'FASE': 'TextEdit', 'ULT_EVENTO': 'TextEdit', 'NOME': 'TextEdit', 'SUBS': 'TextEdit', 'USO': 'TextEdit', 'UF': 'TextEdit', 'DSProcesso': 'TextEdit', });
lyr_ImveisCertificadosSnci_9.set('fieldImages', {'num_proces': 'TextEdit', 'sr': 'TextEdit', 'num_certif': 'TextEdit', 'data_certi': 'DateTime', 'qtd_area_p': 'TextEdit', 'cod_profis': 'TextEdit', 'cod_imovel': 'TextEdit', 'nome_imove': 'TextEdit', 'uf_municip': 'TextEdit', });
lyr_ImveisCertificadosSigef_10.set('fieldImages', {'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'DateTime', 'data_aprov': 'DateTime', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'DateTime', 'municipio_': 'Range', 'uf_id': 'Range', });
lyr_Cancelado_11.set('fieldImages', {'cod_imovel': 'TextEdit', 'area_imove': 'TextEdit', 'ind_status': 'TextEdit', 'ind_tipo_i': 'TextEdit', 'nom_imovel': 'TextEdit', 'imo_munici': 'TextEdit', });
lyr_Suspenso_12.set('fieldImages', {'cod_imovel': 'TextEdit', 'area_imove': 'TextEdit', 'ind_status': 'TextEdit', 'ind_tipo_i': 'TextEdit', 'nom_imovel': 'TextEdit', 'imo_munici': 'TextEdit', });
lyr_Pendente_13.set('fieldImages', {'cod_imovel': 'TextEdit', 'area_imove': 'TextEdit', 'ind_status': 'TextEdit', 'ind_tipo_i': 'TextEdit', 'nom_imovel': 'TextEdit', 'imo_munici': 'TextEdit', });
lyr_Ativo_14.set('fieldImages', {'cod_imovel': 'TextEdit', 'area_imove': 'TextEdit', 'ind_status': 'TextEdit', 'ind_tipo_i': 'TextEdit', 'nom_imovel': 'TextEdit', 'imo_munici': 'TextEdit', });
lyr_Buffer10km_15.set('fieldImages', {'OBJECTID': 'Range', 'terrai_cod': 'Range', 'terrai_nom': 'TextEdit', 'etnia_nome': 'TextEdit', 'municipio_': 'TextEdit', 'uf_sigla': 'TextEdit', 'superficie': 'TextEdit', 'fase_ti': 'TextEdit', 'modalidade': 'TextEdit', 'reestudo_t': 'TextEdit', 'cr': 'TextEdit', 'faixa_fron': 'TextEdit', 'undadm_cod': 'TextEdit', 'undadm_nom': 'TextEdit', 'undadm_sig': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area ha': 'TextEdit', });
lyr_XikrindoCatet_16.set('fieldImages', {'OBJECTID': 'Range', 'terrai_cod': 'Range', 'terrai_nom': 'TextEdit', 'etnia_nome': 'TextEdit', 'municipio_': 'TextEdit', 'uf_sigla': 'TextEdit', 'superficie': 'TextEdit', 'fase_ti': 'TextEdit', 'modalidade': 'TextEdit', 'reestudo_t': 'TextEdit', 'cr': 'TextEdit', 'faixa_fron': 'TextEdit', 'undadm_cod': 'TextEdit', 'undadm_nom': 'TextEdit', 'undadm_sig': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area ha': 'TextEdit', });
lyr_Hidrografia_17.set('fieldImages', {'NORIOCOMP': 'TextEdit', 'CORIO': 'TextEdit', });
lyr_Estradas_18.set('fieldImages', {'geometriaa': 'TextEdit', 'tipovia': 'TextEdit', 'jurisdicao': 'TextEdit', 'administra': 'TextEdit', 'concession': 'TextEdit', 'revestimen': 'TextEdit', 'operaciona': 'TextEdit', 'situacaofi': 'TextEdit', 'canteirodi': 'TextEdit', 'nrpistas': 'Range', 'nrfaixas': 'Range', 'trafego': 'TextEdit', 'tipopavime': 'TextEdit', 'sigla': 'TextEdit', 'acostament': 'TextEdit', 'codtrechor': 'TextEdit', 'limitevelo': 'TextEdit', 'emperimetr': 'TextEdit', 'ID': 'TextEdit', 'categoria': 'TextEdit', 'parent_id': 'TextEdit', 'Label': 'TextEdit', 'id_trecho_': 'TextEdit', 'vl_br': 'TextEdit', 'sg_uf': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_obra': 'TextEdit', 'ds_coinc': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'ds_ato_leg': 'TextEdit', 'est_coinc': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_superfi': 'TextEdit', 'ds_legenda': 'TextEdit', 'sg_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'id_versao': 'TextEdit', 'marcador': 'TextEdit', });
lyr_Aldeias_19.set('fieldImages', {'Id': 'Range', 'Aldeias': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'categoria': 'no label', 'grupo': 'no label', 'esfera': 'no label', 'ano_cria': 'no label', });
lyr_TerrasIndgenas_2.set('fieldLabels', {'gid': 'no label', 'terrai_cod': 'no label', 'terrai_nom': 'no label', 'etnia_nome': 'no label', 'municipio_': 'no label', 'uf_sigla': 'no label', 'superficie': 'no label', 'fase_ti': 'no label', 'modalidade': 'no label', 'reestudo_t': 'no label', 'cr': 'no label', 'faixa_fron': 'no label', 'undadm_cod': 'no label', 'undadm_nom': 'no label', 'undadm_sig': 'no label', 'dominio_un': 'no label', 'data_atual': 'no label', 'epsg': 'no label', });
lyr_RequerimentodePesquisa_3.set('fieldLabels', {'PROCESSO': 'no label', 'NUMERO': 'no label', 'ANO': 'no label', 'AREA_HA': 'no label', 'ID': 'no label', 'FASE': 'no label', 'ULT_EVENTO': 'no label', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'no label', 'UF': 'no label', 'DSProcesso': 'no label', });
lyr_RequerimentodeLavra_4.set('fieldLabels', {'PROCESSO': 'no label', 'NUMERO': 'no label', 'ANO': 'no label', 'AREA_HA': 'no label', 'ID': 'no label', 'FASE': 'no label', 'ULT_EVENTO': 'no label', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'no label', 'UF': 'no label', 'DSProcesso': 'no label', });
lyr_DireitodeRequereraLavra_5.set('fieldLabels', {'PROCESSO': 'no label', 'NUMERO': 'no label', 'ANO': 'no label', 'AREA_HA': 'no label', 'ID': 'no label', 'FASE': 'no label', 'ULT_EVENTO': 'no label', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'no label', 'UF': 'no label', 'DSProcesso': 'no label', });
lyr_Disponibilidade_6.set('fieldLabels', {'PROCESSO': 'no label', 'NUMERO': 'no label', 'ANO': 'no label', 'AREA_HA': 'no label', 'ID': 'no label', 'FASE': 'no label', 'ULT_EVENTO': 'no label', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'no label', 'UF': 'no label', 'DSProcesso': 'no label', });
lyr_ConcessodeLavra_7.set('fieldLabels', {'PROCESSO': 'no label', 'NUMERO': 'no label', 'ANO': 'no label', 'AREA_HA': 'no label', 'ID': 'no label', 'FASE': 'no label', 'ULT_EVENTO': 'no label', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'no label', 'UF': 'no label', 'DSProcesso': 'no label', });
lyr_AutorizaodePesquisa_8.set('fieldLabels', {'PROCESSO': 'no label', 'NUMERO': 'no label', 'ANO': 'no label', 'AREA_HA': 'no label', 'ID': 'no label', 'FASE': 'no label', 'ULT_EVENTO': 'no label', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'no label', 'UF': 'no label', 'DSProcesso': 'no label', });
lyr_ImveisCertificadosSnci_9.set('fieldLabels', {'num_proces': 'no label', 'sr': 'no label', 'num_certif': 'no label', 'data_certi': 'no label', 'qtd_area_p': 'no label', 'cod_profis': 'no label', 'cod_imovel': 'no label', 'nome_imove': 'no label', 'uf_municip': 'no label', });
lyr_ImveisCertificadosSigef_10.set('fieldLabels', {'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'municipio_': 'no label', 'uf_id': 'no label', });
lyr_Cancelado_11.set('fieldLabels', {'cod_imovel': 'no label', 'area_imove': 'no label', 'ind_status': 'no label', 'ind_tipo_i': 'no label', 'nom_imovel': 'no label', 'imo_munici': 'no label', });
lyr_Suspenso_12.set('fieldLabels', {'cod_imovel': 'no label', 'area_imove': 'no label', 'ind_status': 'no label', 'ind_tipo_i': 'no label', 'nom_imovel': 'no label', 'imo_munici': 'no label', });
lyr_Pendente_13.set('fieldLabels', {'cod_imovel': 'no label', 'area_imove': 'no label', 'ind_status': 'no label', 'ind_tipo_i': 'no label', 'nom_imovel': 'no label', 'imo_munici': 'no label', });
lyr_Ativo_14.set('fieldLabels', {'cod_imovel': 'no label', 'area_imove': 'no label', 'ind_status': 'no label', 'ind_tipo_i': 'no label', 'nom_imovel': 'no label', 'imo_munici': 'no label', });
lyr_Buffer10km_15.set('fieldLabels', {'OBJECTID': 'no label', 'terrai_cod': 'no label', 'terrai_nom': 'no label', 'etnia_nome': 'no label', 'municipio_': 'no label', 'uf_sigla': 'no label', 'superficie': 'no label', 'fase_ti': 'no label', 'modalidade': 'no label', 'reestudo_t': 'no label', 'cr': 'no label', 'faixa_fron': 'no label', 'undadm_cod': 'no label', 'undadm_nom': 'no label', 'undadm_sig': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area ha': 'no label', });
lyr_XikrindoCatet_16.set('fieldLabels', {'OBJECTID': 'no label', 'terrai_cod': 'no label', 'terrai_nom': 'no label', 'etnia_nome': 'no label', 'municipio_': 'no label', 'uf_sigla': 'no label', 'superficie': 'no label', 'fase_ti': 'no label', 'modalidade': 'no label', 'reestudo_t': 'no label', 'cr': 'no label', 'faixa_fron': 'no label', 'undadm_cod': 'no label', 'undadm_nom': 'no label', 'undadm_sig': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area ha': 'no label', });
lyr_Hidrografia_17.set('fieldLabels', {'NORIOCOMP': 'no label', 'CORIO': 'no label', });
lyr_Estradas_18.set('fieldLabels', {'geometriaa': 'no label', 'tipovia': 'no label', 'jurisdicao': 'no label', 'administra': 'no label', 'concession': 'no label', 'revestimen': 'no label', 'operaciona': 'no label', 'situacaofi': 'no label', 'canteirodi': 'no label', 'nrpistas': 'no label', 'nrfaixas': 'no label', 'trafego': 'no label', 'tipopavime': 'no label', 'sigla': 'no label', 'acostament': 'no label', 'codtrechor': 'no label', 'limitevelo': 'no label', 'emperimetr': 'no label', 'ID': 'no label', 'categoria': 'no label', 'parent_id': 'no label', 'Label': 'no label', 'id_trecho_': 'no label', 'vl_br': 'no label', 'sg_uf': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_obra': 'no label', 'ds_coinc': 'no label', 'ds_tipo_ad': 'no label', 'ds_ato_leg': 'no label', 'est_coinc': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_superfi': 'no label', 'ds_legenda': 'no label', 'sg_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'id_versao': 'no label', 'marcador': 'no label', });
lyr_Aldeias_19.set('fieldLabels', {'Id': 'no label', 'Aldeias': 'no label', });
lyr_Aldeias_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});