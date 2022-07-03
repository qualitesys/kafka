console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java 13 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.token.delegation.DelegationToken"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.token.delegation.DelegationToken" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DelegationToken"
 , "c2" : "DelegationToken(TokenInformation;byte[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "TokenInformation"
 , "c2" : "tokenInfo()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "hmac()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "hmacAsBase64String()"
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
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.svg" }

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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class DelegationToken contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00039] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.security.token.delegation.DelegationToken.equals@POLYN168706 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.security.token.delegation.DelegationToken.equals@POLYN168706 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.security.token.delegation.DelegationToken.equals@POLYN168706 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.security.token.delegation.DelegationToken.hashCode@POLYN169356 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.security.token.delegation.DelegationToken.hashCode@POLYN169356 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.security.token.delegation.DelegationToken.hashCode@POLYN169356 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.security.token.delegation.DelegationToken.toString@POLYN169740 the MagicNumber/String  'DelegationToken{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.security.token.delegation.DelegationToken.toString@POLYN169740 the MagicNumber/String  'tokenInformation=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.security.token.delegation.DelegationToken.toString@POLYN169740 the MagicNumber/String  ', hmac=[*******]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/token/delegation/DelegationToken.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.security.token.delegation.DelegationToken.toString@POLYN169740 the MagicNumber/String  '}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
