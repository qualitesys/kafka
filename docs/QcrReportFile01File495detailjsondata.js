console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.network.ClientInformation"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.network.ClientInformation" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ClientInformation"
 , "c2" : "ClientInformation(String;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "softwareName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "softwareVersion()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00007] The class ClientInformation contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument softwareName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument softwareVersion is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.network.ClientInformation.toString@POLYN161924 the MagicNumber/String  'ClientInformation(softwareName=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.network.ClientInformation.toString@POLYN161924 the MagicNumber/String  ', softwareVersion=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.network.ClientInformation.toString@POLYN161924 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.network.ClientInformation.equals@POLYN162279 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.common.network.ClientInformation.equals@POLYN162279 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/ClientInformation.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.common.network.ClientInformation.equals@POLYN162279 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
