console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "CloseableVerificationKeyResolver"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#30"
 , "c1" : "JwksFileVerificationKeyResolver"
 , "c2" : "JwksFileVerificationKeyResolver(Path)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#35"
 , "c1" : "void"
 , "c2" : "init()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#51"
 , "c1" : "Key"
 , "c2" : "resolveKey(JsonWebSignature;List<JsonWebStructure>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
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
 , "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class JwksFileVerificationKeyResolver contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00035] For method init list of called methods Object monObjet|java.lang.String Utils_readFileAsStringN159918"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.init@POLYN159740 the MagicNumber/String  'Starting creation of new VerificationKeyResolver from {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method resolveKey arguments JsonWebSignature  jws|List&lt;JsonWebStructure &gt;  nestingContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.resolveKey@POLYN160416 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.resolveKey@POLYN160416 the MagicNumber/String  'VerificationKeyResolver delegate is null; please call init() first' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.init@POLYN159740"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00036] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.init@POLYN159740 the MagicNumber/String 'Starting creation of new VerificationKeyResolver from {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
