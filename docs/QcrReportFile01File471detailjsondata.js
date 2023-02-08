console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SampledStat"
 , "c2" : "org.apache.kafka.common.metrics.stats.Avg"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.metrics.stats.Avg" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#28"
 , "c1" : "Avg"
 , "c2" : "Avg()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#33"
 , "c1" : "void"
 , "c2" : "update(Sample;MetricConfig;double;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#38"
 , "c1" : "double"
 , "c2" : "combine(List&lt;Sample&gt;;MetricConfig;long)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.metrics.stats.Avg.Avg@POLYN145030 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method update arguments Sample  sample|MetricConfig  config|double  value|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument sample is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method combine arguments List&lt;Sample &gt;  samples|MetricConfig  config|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.metrics.stats.Avg.combine@POLYN145370 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.metrics.stats.Avg.combine@POLYN145370 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.metrics.stats.Avg.combine@POLYN145370 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/Avg.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
