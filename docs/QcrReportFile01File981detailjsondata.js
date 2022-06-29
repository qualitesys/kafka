console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceConnector.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/source/SourceConnector.java 4 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceConnector.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Connector"
 , "c2" : "org.apache.kafka.connect.source.SourceConnector"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.source.SourceConnector" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SourceConnectorContext"
 , "c2" : "context()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ExactlyOnceSupport"
 , "c2" : "exactlyOnceSupport(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorTransactionBoundaries"
 , "c2" : "canDefineTransactionBoundaries(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceConnector.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceConnector.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceConnector.java.html#17"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00017] For method exactlyOnceSupport arguments Map&lt;String ,String &gt;  connectorConfig"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceConnector.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.connect.source.SourceConnector.exactlyOnceSupport@POLYN172297 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceConnector.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method canDefineTransactionBoundaries arguments Map&lt;String ,String &gt;  connectorConfig"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/source/SourceConnector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.source.SourceConnector.context@POLYN171404"
}} 
]
};
console.log('leListeStr 99 main end');
