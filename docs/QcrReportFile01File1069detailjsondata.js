console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java 19 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "CloseableConnectorContext"
 , "c2" : "org.apache.kafka.connect.runtime.HerderConnectorContext"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.HerderConnectorContext" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "HerderConnectorContext"
 , "c2" : "HerderConnectorContext(AbstractHerder;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestTaskReconfiguration()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "raiseError(Exception)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class HerderConnectorContext contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.connect.runtime.HerderConnectorContext.HerderConnectorContext@POLYN166438 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.connect.runtime.HerderConnectorContext.requestTaskReconfiguration@POLYN166734 the MagicNumber/String  'The request for task reconfiguration has been rejected ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.connect.runtime.HerderConnectorContext.requestTaskReconfiguration@POLYN166734 the MagicNumber/String  'because this instance of the connector '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.connect.runtime.HerderConnectorContext.requestTaskReconfiguration@POLYN166734 the MagicNumber/String  '' has already ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.connect.runtime.HerderConnectorContext.requestTaskReconfiguration@POLYN166734 the MagicNumber/String  'been shut down.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method raiseError arguments Exception  e"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String  'Connector {} attempted to raise error after shutdown:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String  'The request to fail the connector has been rejected ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String  'because this instance of the connector '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String  '' has already ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String  'been shut down.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.runtime.HerderConnectorContext.close@POLYN167585 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00039] In the recursive method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String 'Connector {} attempted to raise error after shutdown:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String 'The request to fail the connector has been rejected ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00041] In the recursive method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String '' has already ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00041] In the recursive method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String 'because this instance of the connector '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/HerderConnectorContext.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00042] In the recursive method org.apache.kafka.connect.runtime.HerderConnectorContext.raiseError@POLYN167079 the MagicNumber/String 'been shut down.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
