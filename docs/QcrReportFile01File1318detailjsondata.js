console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.ProducerIdControlManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ProducerIdControlManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#40"
 , "c1" : "ProducerIdControlManager"
 , "c2" : "ProducerIdControlManager(ClusterControlManager;SnapshotRegistry)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#46"
 , "c1" : "ControllerResult&lt;ProducerIdsBlock&gt;"
 , "c2" : "generateNextProducerId(int;long)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#65"
 , "c1" : "void"
 , "c2" : "replay(ProducerIdsRecord)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#76"
 , "c1" : "Iterator&lt;List&lt;ApiMessageAndVersion&gt;&gt;"
 , "c2" : "iterator(long)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.svg" }

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
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method generateNextProducerId arguments int  brokerId|long  brokerEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00046] For method generateNextProducerId list of called methods Object monObjet|long block_nextBlockFirstIdN165769"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.controller.ProducerIdControlManager.generateNextProducerId@POLYN165099 the MagicNumber/String  'Exhausted all producerIds as the next block's end producerId ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.controller.ProducerIdControlManager.generateNextProducerId@POLYN165099 the MagicNumber/String  'has exceeded the int64 type limit' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.controller.ProducerIdControlManager.generateNextProducerId@POLYN165099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method replay arguments ProducerIdsRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.controller.ProducerIdControlManager.replay@POLYN166216 the MagicNumber/String  'Next Producer ID from replayed record (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.controller.ProducerIdControlManager.replay@POLYN166216 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.controller.ProducerIdControlManager.replay@POLYN166216 the MagicNumber/String  ' is not greater than current next Producer ID (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.controller.ProducerIdControlManager.replay@POLYN166216 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method iterator arguments long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.controller.ProducerIdControlManager.iterator@POLYN167035 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.controller.ProducerIdControlManager.iterator@POLYN167035 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.controller.ProducerIdControlManager.iterator@POLYN167035 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ProducerIdControlManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
