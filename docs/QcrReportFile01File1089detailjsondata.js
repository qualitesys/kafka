console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java 18 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.connect.runtime.WorkerConfigTransformer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.WorkerConfigTransformer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "WorkerConfigTransformer"
 , "c2" : "WorkerConfigTransformer(Worker;Map<String,ConfigProvider>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,String>"
 , "c2" : "transform(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,String>"
 , "c2" : "transform(String;Map<String,String>)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "scheduleReload(String;Map<String,Long>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "scheduleReload(String;String;long)"
 , "c3" : "5"
 , "c4" : "10"
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
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.svg" }

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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "4"
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
   "c1" : "00020"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00020] The class WorkerConfigTransformer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method transform arguments Map&lt;String ,String &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN173879 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method transform arguments String  connectorName|Map&lt;String ,String &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN174116 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN174116 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN174116 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN174116 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method scheduleReload arguments String  connectorName|Map&lt;String ,Long &gt;  ttls"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument ttls is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method scheduleReload arguments String  connectorName|String  path|long  ttl"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00062] For method scheduleReload list of called methods Object monObjet|org.apache.kafka.connect.runtime.Herder worker_herderN176880"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN175716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN175716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN175716 the MagicNumber/String  'Scheduling a restart of connector {} in {} ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN175716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN175716 the MagicNumber/String  'Unexpected error during connector restart: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/WorkerConfigTransformer.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.connect.runtime.WorkerConfigTransformer.close@POLYN177115 the MagicNumber/String  'config provider' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
