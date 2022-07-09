console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java 6 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ChannelMetadataRegistry"
 , "c2" : "org.apache.kafka.common.network.DefaultChannelMetadataRegistry"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.network.DefaultChannelMetadataRegistry" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "registerCipherInformation(CipherInformation)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CipherInformation"
 , "c2" : "cipherInformation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "registerClientInformation(ClientInformation)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ClientInformation"
 , "c2" : "clientInformation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class DefaultChannelMetadataRegistry contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.html#9"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00009] For method registerCipherInformation arguments CipherInformation  cipherInformation"
}} 
,
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00010] In method org.apache.kafka.common.network.DefaultChannelMetadataRegistry.registerCipherInformation@POLYN142638 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method registerClientInformation arguments ClientInformation  clientInformation"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.common.network.DefaultChannelMetadataRegistry.close@POLYN143232 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/DefaultChannelMetadataRegistry.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.common.network.DefaultChannelMetadataRegistry.close@POLYN143232 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
