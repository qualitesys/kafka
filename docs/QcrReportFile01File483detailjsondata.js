console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/SimpleRate.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/metrics/stats/SimpleRate.java 2 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/SimpleRate.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Rate"
 , "c2" : "org.apache.kafka.common.metrics.stats.SimpleRate"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.metrics.stats.SimpleRate" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00010"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/SimpleRate.java.html#10"
 , "c1" : "long"
 , "c2" : "windowSize(MetricConfig;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/SimpleRate.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/SimpleRate.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c1" : "00010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/SimpleRate.java.html#10"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00010] For method windowSize arguments MetricConfig  config|long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/SimpleRate.java.html#10"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00010] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
,
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/stats/SimpleRate.java.fct.svg" 

}
};
console.log('leListeStr 99 main end');
