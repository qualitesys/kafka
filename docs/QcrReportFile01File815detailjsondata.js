console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java 7 rule violations " 
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
 , "c5" : "00089"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#89"
 , "c1" : "JwksFileVerificationKeyResolver"
 , "c2" : "JwksFileVerificationKeyResolver(Path)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#94"
 , "c1" : "void"
 , "c2" : "init()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#110"
 , "c1" : "Key"
 , "c2" : "resolveKey(JsonWebSignature;List&lt;JsonWebStructure&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.svg" }

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
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00094] For method init list of called methods Object monObjet|java.lang.String Utils_readFileAsStringN169046"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.init@POLYN168866 the MagicNumber/String  'Starting creation of new VerificationKeyResolver from {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method resolveKey arguments JsonWebSignature  jws|List&lt;JsonWebStructure &gt;  nestingContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.resolveKey@POLYN169546 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.resolveKey@POLYN169546 the MagicNumber/String  'VerificationKeyResolver delegate is null; please call init() first' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.init@POLYN168866"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.common.security.oauthbearer.secured.JwksFileVerificationKeyResolver.init@POLYN168866 the MagicNumber/String 'Starting creation of new VerificationKeyResolver from {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/secured/JwksFileVerificationKeyResolver.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
