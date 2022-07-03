console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java 13 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Versioned"
 , "c2" : "org.apache.kafka.connect.connector.Connector"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.connector.Connector" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initialize(ConnectorContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initialize(ConnectorContext;List<Map<String,String>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorContext"
 , "c2" : "context()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reconfigure(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Class<?extendsTask>"
 , "c2" : "taskClass()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Map<String,String>>"
 , "c2" : "taskConfigs(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Config"
 , "c2" : "validate(Map<String,String>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.svg" }

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
 , "c4" : "2"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class Connector contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method initialize arguments ConnectorContext  ctx"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method initialize arguments ConnectorContext  ctx|List&lt;Map&lt;String ,String &gt; &gt;  taskConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method reconfigure arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method taskConfigs arguments int  maxTasks"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method validate arguments Map&lt;String ,String &gt;  connectorConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00055] For method validate list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.common.config.ConfigValue&gt; configDef_validateN190526"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.connector.Connector.validate@POLYN190056 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.connector.Connector.validate@POLYN190056 the MagicNumber/String  '%s.config() must return a ConfigDef that is not null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.connector.Connector.validate@POLYN190056"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.connect.connector.Connector.validate@POLYN190056 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/connector/Connector.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.connect.connector.Connector.validate@POLYN190056 the MagicNumber/String '%s.config-- must return a ConfigDef that is not null.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
