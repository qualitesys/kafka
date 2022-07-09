console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java 27 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "RecordSerde<ApiMessageAndVersion>"
 , "c2" : "org.apache.kafka.server.common.serialization.AbstractApiMessageSerde"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.common.serialization.AbstractApiMessageSerde" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "short"
 , "c2" : "unsignedIntToShort(Readable;String)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "recordSize(ApiMessageAndVersion;ObjectSerializationCache)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "write(ApiMessageAndVersion;ObjectSerializationCache;Writable)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ApiMessageAndVersion"
 , "c2" : "read(Readable;int)"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "ApiMessage"
 , "c2" : "apiMessageFor(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.png" 

 , "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.svg" }

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
 , "c4" : "5"
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
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class AbstractApiMessageSerde contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method unsignedIntToShort arguments Readable  input|String  entity"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument input is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.unsignedIntToShort@POLYN160231 the MagicNumber/String  'Error while reading ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.unsignedIntToShort@POLYN160231 the MagicNumber/String  'Value for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.unsignedIntToShort@POLYN160231 the MagicNumber/String  ' was too large.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method recordSize arguments ApiMessageAndVersion  data|ObjectSerializationCache  serializationCache"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method write arguments ApiMessageAndVersion  data|ObjectSerializationCache  serializationCache|Writable  out"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method read arguments Readable  input|int  size"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument input is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  'frame version' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  'Could not deserialize metadata record with frame version 0. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  'Note that upgrades from the preview release of KRaft in 2.8 to newer versions are not supported.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  'Could not deserialize metadata record due to unknown frame version ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  '(only frame version ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  ' is supported)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  'version' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  'Failed to deserialize record with type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  'Found ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.server.common.serialization.AbstractApiMessageSerde.read@POLYN162044 the MagicNumber/String  ' byte(s) of garbage after ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/serialization/AbstractApiMessageSerde.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method apiMessageFor arguments short  apiKey"
}} 
]
};
console.log('leListeStr 99 main end');
