console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java 4 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AccessTokenRetriever"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.FileTokenRetriever"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.FileTokenRetriever" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.html#17"
 , "c1" : "FileTokenRetriever"
 , "c2" : "FileTokenRetriever(Path)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.html#22"
 , "c1" : "void"
 , "c2" : "init()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.html#27"
 , "c1" : "String"
 , "c2" : "retrieve()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class FileTokenRetriever contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00022] For method init list of called methods Object monObjet|java.lang.String Utils_readFileAsStringN144496"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.security.oauthbearer.secured.FileTokenRetriever.retrieve@POLYN144622 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.security.oauthbearer.secured.FileTokenRetriever.retrieve@POLYN144622 the MagicNumber/String  'Access token is null; please call init() first' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/FileTokenRetriever.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
