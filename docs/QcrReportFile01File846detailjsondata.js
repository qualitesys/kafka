console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java 16 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AuthenticateCallbackHandler"
 , "c2" : "org.apache.kafka.common.security.scram.internals.ScramServerCallbackHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.scram.internals.ScramServerCallbackHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#26"
 , "c1" : "ScramServerCallbackHandler"
 , "c2" : "ScramServerCallbackHandler(CredentialCache.Cache<ScramCredential>;DelegationTokenCache)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#33"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;String;List<AppConfigurationEntry>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#38"
 , "c1" : "void"
 , "c2" : "handle(Callback[])"
 , "c3" : "9"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#59"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "9"
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00020] The class ScramServerCallbackHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method configure arguments Map&lt;String ,? &gt;  configs|String  mechanism|List&lt;AppConfigurationEntry &gt;  jaasConfigEntries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method handle arguments Callback[]  callbacks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00041] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00042] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00043] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00050] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.common.security.scram.internals.ScramServerCallbackHandler.handle@POLYN151645 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.common.security.scram.internals.ScramServerCallbackHandler.handle@POLYN151645 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00059] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00059] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramServerCallbackHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
