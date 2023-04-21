console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java 42 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.distributed.ConnectProtocol"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.distributed.ConnectProtocol" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#126"
 , "c1" : "ByteBuffer"
 , "c2" : "serializeMetadata(WorkerState)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#144"
 , "c1" : "JoinGroupRequestProtocolCollection"
 , "c2" : "metadataRequest(WorkerState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00160"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#160"
 , "c1" : "WorkerState"
 , "c2" : "deserializeMetadata(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00182"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#182"
 , "c1" : "ByteBuffer"
 , "c2" : "serializeAssignment(Assignment)"
 , "c3" : "2"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00213"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#213"
 , "c1" : "Assignment"
 , "c2" : "deserializeAssignment(ByteBuffer)"
 , "c3" : "5"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00400"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#400"
 , "c1" : "void"
 , "c2" : "checkVersionCompatibility(short)"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method serializeMetadata arguments WorkerState  workerState"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument workerState is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method metadataRequest arguments WorkerState  workerState"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method deserializeMetadata arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00160] For method deserializeMetadata list of called methods Object monObjet|org.apache.kafka.common.protocol.types.Struct CONNECT_PROTOCOL_HEADER_SCHEMA_readN211861|org.apache.kafka.connect.runtime.distributed.ConnectProtocol.WorkerState header_getShortN211955|org.apache.kafka.common.protocol.types.Struct CONFIG_STATE_V0_readN212112|java.lang.Long struct_getLongN212206|java.lang.String struct_getStringN212300"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00182] For method serializeAssignment arguments Assignment  assignment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#182"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00182] The argument assignment is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00190] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00192] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#213"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00213] For method deserializeAssignment arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#213"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00213] For method deserializeAssignment list of called methods Object monObjet|org.apache.kafka.common.protocol.types.Struct CONNECT_PROTOCOL_HEADER_SCHEMA_readN214894|org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment header_getShortN214988|org.apache.kafka.common.protocol.types.Struct ASSIGNMENT_V0_readN215145|java.lang.Short struct_getShortN215239|java.lang.String struct_getStringN215333|java.lang.String struct_getStringN215427|java.lang.Long struct_getLongN215521|org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment assignment_getStringN216012"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00225] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00225] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00226] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00227] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00228] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00228] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00228] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00228] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.WorkerState.toString@POLYN217403 the MagicNumber/String  'WorkerState{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.WorkerState.toString@POLYN217403 the MagicNumber/String  'url='' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.WorkerState.toString@POLYN217403 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.WorkerState.toString@POLYN217403 the MagicNumber/String  ', offset=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.WorkerState.toString@POLYN217403 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.Assignment@POLYN218636 the MagicNumber/String  'Assigned connector IDs may be empty but not null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00308"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.Assignment@POLYN218636 the MagicNumber/String  'Assigned task IDs may be empty but not null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  'Assignment{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  'error=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  ', leader='' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  ', leaderUrl='' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  ', offset=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  ', connectorIds=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  ', taskIds=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.Assignment.toString@POLYN220684 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00386] For method asMap list of called methods Object monObjet|java.lang.String taskId_connectorN221781"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00393] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00400"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#400"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00400] For method checkVersionCompatibility arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.connect.runtime.distributed.ConnectProtocol.checkVersionCompatibility@POLYN222077 the MagicNumber/String  'Unsupported subscription version: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.ConnectProtocol.deserializeAssignment@POLYN214797"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.distributed.ConnectProtocol.deserializeMetadata@POLYN211764"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/distributed/ConnectProtocol.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
