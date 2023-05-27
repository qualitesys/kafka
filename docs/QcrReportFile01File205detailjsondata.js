console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.consumer.internals.ConsumerMetrics"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.ConsumerMetrics" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#31"
 , "c1" : "ConsumerMetrics"
 , "c2" : "ConsumerMetrics(Set&lt;String&gt;;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#35"
 , "c1" : "ConsumerMetrics"
 , "c2" : "ConsumerMetrics(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#39"
 , "c1" : "List&lt;MetricNameTemplate&gt;"
 , "c2" : "getAllTemplates()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#44"
 , "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.svg" }

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
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
 , "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00029] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method main arguments String[]  args"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.clients.consumer.internals.ConsumerMetrics.main@POLYN155337 the MagicNumber/String  'client-id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.clients.consumer.internals.ConsumerMetrics.main@POLYN155337 the MagicNumber/String  'consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.clients.consumer.internals.ConsumerMetrics.main@POLYN155337 the MagicNumber/String  'kafka.consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00044] Public method main is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerMetrics.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
