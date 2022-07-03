console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java 18 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "serializeMetadata(ExtendedWorkerState;boolean)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "JoinGroupRequestProtocolCollection"
 , "c2" : "metadataRequest(ExtendedWorkerState;boolean)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ExtendedWorkerState"
 , "c2" : "deserializeMetadata(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "serializeAssignment(ExtendedAssignment;boolean)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "ExtendedAssignment"
 , "c2" : "deserializeAssignment(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "checkVersionCompatibility(short)"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.svg" }

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
 , "c4" : "7"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00035] The class IncrementalCooperativeConnectProtocol contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method serializeMetadata arguments ExtendedWorkerState  workerState|boolean  sessioned"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument workerState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method metadataRequest arguments ExtendedWorkerState  workerState|boolean  sessioned"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.metadataRequest@POLYN215663 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.metadataRequest@POLYN215663 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method deserializeMetadata arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method deserializeMetadata list of called methods Object monObjet|org.apache.kafka.connect.runtime.distributed.ExtendedWorkerState header_getShortN217160|org.apache.kafka.common.protocol.types.Struct CONFIG_STATE_V1_readN217317|Long configState_getLongN217411|String configState_getStringN217505|org.apache.kafka.common.protocol.types.Struct ALLOCATION_V1_readN217599|org.apache.kafka.connect.runtime.distributed.ExtendedAssignment deserializeAssignmentN217693"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method serializeAssignment arguments ExtendedAssignment  assignment|boolean  sessioned"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method serializeAssignment list of called methods Object monObjet|org.apache.kafka.common.protocol.types.Struct assignment_toStructN218478"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.serializeAssignment@POLYN218164 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.serializeAssignment@POLYN218164 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method deserializeAssignment arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method deserializeAssignment list of called methods Object monObjet|org.apache.kafka.connect.runtime.distributed.ExtendedAssignment header_getShortN219543|org.apache.kafka.common.protocol.types.Struct ASSIGNMENT_V1_readN219700"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN219241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN219241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method checkVersionCompatibility arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/IncrementalCooperativeConnectProtocol.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.checkVersionCompatibility@POLYN219863 the MagicNumber/String  'Unsupported subscription version: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
