console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java 5 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.GroupRebalanceConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.GroupRebalanceConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "GroupRebalanceConfig"
 , "c2" : "GroupRebalanceConfig(AbstractConfig;ProtocolType)"
 , "c3" : "9"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "GroupRebalanceConfig"
 , "c2" : "GroupRebalanceConfig(int;int;int;String;Optional<String>;long;boolean)"
 , "c3" : "1"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java.svg" }

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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class GroupRebalanceConfig contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.clients.GroupRebalanceConfig.GroupRebalanceConfig@POLYN166713 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.GroupRebalanceConfig.GroupRebalanceConfig@POLYN166713 the MagicNumber/String  'internal.leave.group.on.close' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/GroupRebalanceConfig.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.clients.GroupRebalanceConfig.GroupRebalanceConfig@POLYN166713 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
