console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java 18 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "2"
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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class Heartbeat contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.clients.consumer.internals.Heartbeat.Heartbeat@POLYN167510 the MagicNumber/String  'Heartbeat must be set lower than the session timeout' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.clients.consumer.internals.Heartbeat.Heartbeat@POLYN167510 the MagicNumber/String  '[Heartbeat groupID=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.clients.consumer.internals.Heartbeat.Heartbeat@POLYN167510 the MagicNumber/String  '] ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method update arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method poll arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method sentHeartbeat arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.clients.consumer.internals.Heartbeat.sentHeartbeat@POLYN169086 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.consumer.internals.Heartbeat.sentHeartbeat@POLYN169086 the MagicNumber/String  'Sending heartbeat request with {}ms remaining on timer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.clients.consumer.internals.Heartbeat.failHeartbeat@POLYN169583 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.clients.consumer.internals.Heartbeat.failHeartbeat@POLYN169583 the MagicNumber/String  'Heartbeat failed, reset the timer to {}ms remaining' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.clients.consumer.internals.Heartbeat.receiveHeartbeat@POLYN169952 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method shouldHeartbeat arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method timeToNextHeartbeat arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method sessionTimeoutExpired arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/Heartbeat.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method pollTimeoutExpired arguments long  now"
}} 
]
};
console.log('leListeStr 99 main end');
