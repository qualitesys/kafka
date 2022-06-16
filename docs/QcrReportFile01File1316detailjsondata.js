console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java 15 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.xml" 
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class ProducerIdControlManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method generateNextProducerId arguments int  brokerId|long  brokerEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.controller.ProducerIdControlManager.generateNextProducerId@POLYN165505 the MagicNumber/String  'Exhausted all producerIds as the next block's end producerId ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.controller.ProducerIdControlManager.generateNextProducerId@POLYN165505 the MagicNumber/String  'has exceeded the int64 type limit' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.controller.ProducerIdControlManager.generateNextProducerId@POLYN165505 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method replay arguments ProducerIdsRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.controller.ProducerIdControlManager.replay@POLYN166614 the MagicNumber/String  'Next Producer ID from replayed record (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.controller.ProducerIdControlManager.replay@POLYN166614 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.controller.ProducerIdControlManager.replay@POLYN166614 the MagicNumber/String  ' is not greater than current next Producer ID (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.controller.ProducerIdControlManager.replay@POLYN166614 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method iterator arguments long  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.controller.ProducerIdControlManager.iterator@POLYN167431 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.controller.ProducerIdControlManager.iterator@POLYN167431 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.controller.ProducerIdControlManager.iterator@POLYN167431 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
