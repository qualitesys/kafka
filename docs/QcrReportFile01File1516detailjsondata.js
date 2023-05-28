console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java 26 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RecordSerde<ApiMessageAndVersion>"
 , "c2" : "org.apache.kafka.server.common.serialization.AbstractApiMessageSerde"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.common.serialization.AbstractApiMessageSerde" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#48"
 , "c1" : "short"
 , "c2" : "unsignedIntToShort(Readable;String)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#62"
 , "c1" : "int"
 , "c2" : "recordSize(ApiMessageAndVersion;ObjectSerializationCache)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#72"
 , "c1" : "void"
 , "c2" : "write(ApiMessageAndVersion;ObjectSerializationCache;Writable)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#82"
 , "c1" : "ApiMessageAndVersion"
 , "c2" : "read(Readable;int)"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#120"
 , "c1" : "ApiMessage"
 , "c2" : "apiMessageFor(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method unsignedIntToShort arguments Readable  input|String  entity"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument input is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.unsignedIntToShort@POLYN169989 the MagicNumber/String  'Error while reading ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.unsignedIntToShort@POLYN169989 the MagicNumber/String  'Value for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.unsignedIntToShort@POLYN169989 the MagicNumber/String  ' was too large.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method recordSize arguments ApiMessageAndVersion  data|ObjectSerializationCache  serializationCache"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method write arguments ApiMessageAndVersion  data|ObjectSerializationCache  serializationCache|Writable  out"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method read arguments Readable  input|int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument input is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  'frame version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  'Could not deserialize metadata record with frame version 0. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  'Note that upgrades from the preview release of KRaft in 2.8 to newer versions are not supported.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  'Could not deserialize metadata record due to unknown frame version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  '(only frame version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  ' is supported)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  'version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  'Failed to deserialize record with type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  'Found ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN171806 the MagicNumber/String  ' byte(s) of garbage after ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method apiMessageFor arguments short  apiKey"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
