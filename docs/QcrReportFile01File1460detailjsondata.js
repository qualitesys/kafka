console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/FilteringJmxReporter.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/metrics/FilteringJmxReporter.java 2 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/FilteringJmxReporter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "JmxReporter"
 , "c2" : "org.apache.kafka.server.metrics.FilteringJmxReporter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.metrics.FilteringJmxReporter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "FilteringJmxReporter"
 , "c2" : "FilteringJmxReporter(MetricsRegistry;Predicate<MetricName>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "onMetricAdded(MetricName;Metric)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "updatePredicate(Predicate<MetricName>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/FilteringJmxReporter.java.png" 

 , "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/FilteringJmxReporter.java.svg" }

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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/FilteringJmxReporter.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method onMetricAdded arguments MetricName  name|Metric  metric"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/metrics/FilteringJmxReporter.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method updatePredicate arguments Predicate&lt;MetricName &gt;  predicate"
}} 
]
};
console.log('leListeStr 99 main end');
