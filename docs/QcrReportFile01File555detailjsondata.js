console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.record.ControlRecordUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.ControlRecordUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#35"
 , "c1" : "LeaderChangeMessage"
 , "c2" : "deserializeLeaderChangeMessage(Record)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#44"
 , "c1" : "LeaderChangeMessage"
 , "c2" : "deserializeLeaderChangeMessage(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#49"
 , "c1" : "SnapshotHeaderRecord"
 , "c2" : "deserializedSnapshotHeaderRecord(Record)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#58"
 , "c1" : "SnapshotHeaderRecord"
 , "c2" : "deserializedSnapshotHeaderRecord(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#63"
 , "c1" : "SnapshotFooterRecord"
 , "c2" : "deserializedSnapshotFooterRecord(Record)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#72"
 , "c1" : "SnapshotFooterRecord"
 , "c2" : "deserializedSnapshotFooterRecord(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.svg" }

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
 , "c4" : "6"
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
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method deserializeLeaderChangeMessage arguments Record  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.record.ControlRecordUtils.deserializeLeaderChangeMessage@POLYN160233 the MagicNumber/String  'Expected LEADER_CHANGE control record type(2), but found ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method deserializeLeaderChangeMessage arguments ByteBuffer  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method deserializedSnapshotHeaderRecord arguments Record  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.record.ControlRecordUtils.deserializedSnapshotHeaderRecord@POLYN161018 the MagicNumber/String  'Expected SNAPSHOT_HEADER control record type(3), but found ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method deserializedSnapshotHeaderRecord arguments ByteBuffer  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method deserializedSnapshotFooterRecord arguments Record  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.record.ControlRecordUtils.deserializedSnapshotFooterRecord@POLYN161803 the MagicNumber/String  'Expected SNAPSHOT_FOOTER control record type(4), but found ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method deserializedSnapshotFooterRecord arguments ByteBuffer  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ControlRecordUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
