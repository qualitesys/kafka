console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java 28 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#37"
 , "c1" : "void"
 , "c2" : "writeTaskIdTo(TaskId;DataOutputStream;int)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#55"
 , "c1" : "TaskId"
 , "c2" : "readTaskIdFrom(DataInputStream;int)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#72"
 , "c1" : "void"
 , "c2" : "writeTaskIdTo(TaskId;ByteBuffer;int)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#89"
 , "c1" : "TaskId"
 , "c2" : "readTaskIdFrom(ByteBuffer;int)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#109"
 , "c1" : "String"
 , "c2" : "getNamedTopologyOrElseNull(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.svg" }

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
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method writeTaskIdTo arguments TaskId  taskId|DataOutputStream  out|int  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument taskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN166101 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN166101 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN166101 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN166101 the MagicNumber/String  'Named topologies are not compatible with protocol version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method readTaskIdFrom arguments DataInputStream  in|int  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00055] For method readTaskIdFrom list of called methods Object monObjet|int in_readIntN167276|int in_readIntN167358|int in_readIntN167547|java.lang.String namedTopologyBuilder_toStringN167961"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument in is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.readTaskIdFrom@POLYN167129 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.readTaskIdFrom@POLYN167129 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method writeTaskIdTo arguments TaskId  taskId|ByteBuffer  buf|int  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument taskId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument buf is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN168235 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN168235 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN168235 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN168235 the MagicNumber/String  'Named topologies are not compatible with protocol version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method readTaskIdFrom arguments ByteBuffer  buf|int  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00089] For method readTaskIdFrom list of called methods Object monObjet|java.lang.String namedTopologyBuilder_toStringN170124"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument buf is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.readTaskIdFrom@POLYN169304 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.readTaskIdFrom@POLYN169304 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method getNamedTopologyOrElseNull arguments String  namedTopology"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.getNamedTopologyOrElseNull@POLYN170483 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.getNamedTopologyOrElseNull@POLYN170483 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.getNamedTopologyOrElseNull@POLYN170483 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/assignment/ConsumerProtocolUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
