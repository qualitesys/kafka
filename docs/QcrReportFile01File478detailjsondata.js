console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java 9 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "CompoundStat"
 , "c2" : "org.apache.kafka.common.metrics.stats.Meter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.metrics.stats.Meter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#40"
 , "c1" : "Meter"
 , "c2" : "Meter(MetricName;MetricName)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#47"
 , "c1" : "Meter"
 , "c2" : "Meter(TimeUnit;MetricName;MetricName)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#54"
 , "c1" : "Meter"
 , "c2" : "Meter(SampledStat;MetricName;MetricName)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#61"
 , "c1" : "Meter"
 , "c2" : "Meter(TimeUnit;SampledStat;MetricName;MetricName)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#72"
 , "c1" : "List<NamedMeasurable>"
 , "c2" : "stats()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#79"
 , "c1" : "void"
 , "c2" : "record(MetricConfig;double;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#87"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.metrics.stats.Meter.Meter@POLYN152395 the MagicNumber/String  'Meter is supported only for WindowedCount or WindowedSum.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method record arguments MetricConfig  config|double  value|long  timeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.metrics.stats.Meter.record@POLYN153356 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.metrics.stats.Meter.toString@POLYN153868 the MagicNumber/String  'Meter(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.common.metrics.stats.Meter.toString@POLYN153868 the MagicNumber/String  'rate=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.metrics.stats.Meter.toString@POLYN153868 the MagicNumber/String  ', total=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.metrics.stats.Meter.toString@POLYN153868 the MagicNumber/String  ', rateMetricName=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.metrics.stats.Meter.toString@POLYN153868 the MagicNumber/String  ', totalMetricName=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.metrics.stats.Meter.toString@POLYN153868 the MagicNumber/String  ')' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Meter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
