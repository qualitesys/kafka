console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java 32 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Receive"
 , "c2" : "org.apache.kafka.common.network.NetworkReceive"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.network.NetworkReceive" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "NetworkReceive"
 , "c2" : "NetworkReceive(String;ByteBuffer)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "NetworkReceive"
 , "c2" : "NetworkReceive(String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "NetworkReceive"
 , "c2" : "NetworkReceive(int;String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "NetworkReceive"
 , "c2" : "NetworkReceive(int;String;MemoryPool)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "NetworkReceive"
 , "c2" : "NetworkReceive()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "source()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "complete()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "readFrom(ScatteringByteChannel)"
 , "c3" : "11"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "requiredMemoryAmountKnown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "memoryAllocated()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "payload()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "bytesRead()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.svg" }

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
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
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
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class NetworkReceive contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.common.network.NetworkReceive.NetworkReceive@POLYN176307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.network.NetworkReceive.NetworkReceive@POLYN176722 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.network.NetworkReceive.NetworkReceive@POLYN176722 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.network.NetworkReceive.NetworkReceive@POLYN177153 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.common.network.NetworkReceive.NetworkReceive@POLYN177153 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.network.NetworkReceive.NetworkReceive@POLYN177609 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.network.NetworkReceive.NetworkReceive@POLYN177609 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.network.NetworkReceive.complete@POLYN178302 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method readFrom arguments ScatteringByteChannel  channel"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00075] For method readFrom list of called methods Object monObjet|java.nio.ByteBuffer memoryPool_tryAllocateN179971"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  'Invalid receive (size = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  'Invalid receive (size = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  ' larger than ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  'Broker low on memory - could not allocate buffer of size {} for source {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.common.network.NetworkReceive.readFrom@POLYN178514 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.network.NetworkReceive.requiredMemoryAmountKnown@POLYN180602 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.network.NetworkReceive.memoryAllocated@POLYN180735 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.network.NetworkReceive.close@POLYN180851 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.common.network.NetworkReceive.close@POLYN180851 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/NetworkReceive.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.common.network.NetworkReceive.bytesRead@POLYN181255 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
